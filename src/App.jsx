import { useState, useEffect } from "react";
import "./App.scss";
import Points from "./components/Points";
import Stats from "./components/Stats";
import Player from "./components/Player";

const Game = ({ gameMode, numRounds }) => {
  const [playerA, setPlayerA] = useState(null);
  const [playerB, setPlayerB] = useState(null);
  const [games, setGames] = useState([]);
  const [points, setPoints] = useState({ A: 0, B: 0 });
  const [over, setOver] = useState(false);

  const reset = () => {
    setGames([]);
    setPoints({ A: 0, B: 0 });
    setOver(false);
  };

  useEffect(() => {
    if ((playerA && playerB) || (playerA && gameMode === "0")) {
      const rand = Math.random() < 0.5 ? "0" : "1";
      const _playerB = gameMode === "0" ? rand : playerB;

      setGames((prev) => [...prev, { A: playerA, B: _playerB }]);

      if (playerA === "1" && _playerB === "1") {
        setPoints({ A: points.A + 3, B: points.B + 3 });
      } else if (playerA === "0" && _playerB === "1") {
        setPoints({ A: points.A + 5, B: points.B + 0 });
      } else if (playerA === "1" && _playerB === "0") {
        setPoints({ A: points.A + 0, B: points.B + 5 });
      } else if (playerA === "0" && _playerB === "0") {
        setPoints({ A: points.A + 1, B: points.B + 1 });
      }

      setPlayerA(null);
      setPlayerB(null);

      if (games.length >= numRounds - 1) return setOver(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <div>
          <h2>
            {points.A > points.B
              ? "Player A won!"
              : points.A < points.B
              ? "Player B won!"
              : "Draw"}
          </h2>
          <button onClick={reset}>Again</button>
        </div>
      )}
    </div>
  );
};

function App() {
  const [gameMode, setGameMode] = useState(false);
  const [numRounds, setNumRounds] = useState(10);

  /*
    C + C = 3 / 3 points
    D + C = 5 / 0 points
    C + D = 0 / 5 points
    D + D = 1 / 1 points
  */

  return (
    <div className="game">
      {!gameMode && (
        <div className="gamectl">
          <p>
            <p>How many rounds: {numRounds}</p>
            <input
              type="range"
              min="10"
              max="200"
              value={numRounds}
              onChange={(e) => setNumRounds(e.target.value)}
            />
          </p>

          <button onClick={() => setGameMode("0")}>Single player</button>
          <button onClick={() => setGameMode("1")}>With friend</button>
        </div>
      )}

      {gameMode && <Game gameMode={gameMode} numRounds={numRounds} />}
    </div>
  );
}

export default App;
