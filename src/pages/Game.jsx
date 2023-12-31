/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "preact/hooks";
import Points from "../components/Points";
import Stats from "../components/Stats";
import Player from "../components/Player";
import End from "../components/End";
import Algo from "../components/Algo";
import OnlineForm from "../components/OnlineForm";
import Shoutbox from "../components/Shoutbox";
import { algo, chooseRandomStrategie, strategies } from "../utils/algo";
import { useApp } from "../context/AppContext";
import "../styles/App.scss";

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
    playerID,
  } = useApp();

  useEffect(() => {
    if ((playerA && playerB) || (playerA && gameMode === "0")) {
      const rand = strategies(games, chooseRandomStrategie());
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
      {gameMode === "2" && <Algo gameMode={gameMode} numRounds={numRounds} />}
      <div>
        <Points points={points} />
        <Stats games={games} />
      </div>

      {!over ? (
        <div className="controls">
          {gameMode === "2" ? (
            <Player
              id={playerID}
              gameMode={gameMode}
              player={playerID === "A" ? playerA : playerB}
            />
          ) : (
            <Player id="A" player={playerA} setPlayer={setPlayerA} />
          )}

          {gameMode === "1" && (
            <Player id="B" player={playerB} setPlayer={setPlayerB} />
          )}
        </div>
      ) : (
        <End />
      )}

      {gameMode === "2" && <Shoutbox name={playerID} />}
    </div>
  );
};

function Game() {
  const [gameMode, setGameMode] = useState(false);
  const [numRounds, setNumRounds] = useState(10);
  const [showOnline, setShowOnline] = useState(false);
  const { reset } = useApp();

  useEffect(() => reset, []);

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
          <button onClick={() => setShowOnline((prev) => !prev)}>Online</button>
          {showOnline && (
            <OnlineForm
              numRounds={numRounds}
              setGameMode={setGameMode}
              setNumRounds={setNumRounds}
            />
          )}
        </div>
      )}

      {gameMode && <GameComp gameMode={gameMode} numRounds={numRounds} />}
    </div>
  );
}

export default Game;
