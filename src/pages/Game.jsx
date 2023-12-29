/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Points from "../components/Points";
import Stats from "../components/Stats";
import Player from "../components/Player";
import End from "../components/End";
import { algo } from "../utils/algo";
import { useApp } from "../context/AppContext";
import "../App.scss";

const GameComp = ({ gameMode, numRounds }) => {
  const {
    playerA,
    setPlayerA,
    playerB,
    setPlayerB,
    games,
    setGames,
    points,
    setPoints,
    over,
    setOver,
  } = useApp();

  useEffect(() => {
    if ((playerA && playerB) || (playerA && gameMode === "0")) {
      const rand = Math.random() < 0.5 ? "0" : "1";
      const _playerB = gameMode === "0" ? rand : playerB;

      setGames((prev) => [...prev, { A: playerA, B: _playerB }]);

      algo(playerA, _playerB, points, setPoints);

      setPlayerA(null);
      setPlayerB(null);

      if (games.length >= numRounds - 1) return setOver(true);
    }
  }, [playerA, playerB]);

  return (
    <div>
      <div>
        <Points points={points} />
        <Stats games={games} />
      </div>

      {!over ? (
        <div className="controls">
          <Player id="A" player={playerA} setPlayer={setPlayerA} />

          {gameMode === "1" && (
            <Player id="B" player={playerB} setPlayer={setPlayerB} />
          )}
        </div>
      ) : (
        <End />
      )}
    </div>
  );
};

function Game() {
  const [gameMode, setGameMode] = useState(false);
  const [numRounds, setNumRounds] = useState(10);

  return (
    <div className="game">
      {!gameMode && (
        <div className="gamectl">
          <div>
            <p>How many rounds: {numRounds}</p>
            <input
              type="range"
              min="10"
              max="200"
              value={numRounds}
              onChange={(e) => setNumRounds(e.target.value)}
            />
          </div>

          <button onClick={() => setGameMode("0")}>Single player</button>
          <button onClick={() => setGameMode("1")}>Local game</button>
        </div>
      )}

      {gameMode && <GameComp gameMode={gameMode} numRounds={numRounds} />}
    </div>
  );
}

export default Game;
