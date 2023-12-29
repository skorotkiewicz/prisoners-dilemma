import { useState, useEffect } from "react";
import "./App.scss";

const Button = ({ disabled, onClick, children, ...rest }) => {
  return (
    <button disabled={disabled} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

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

  /*

C + C = 3 / 3 points
D + C = 5 / 0 points
C + D = 0 / 5 points
D + D = 1 / 1 points

*/

  return (
    <div>
      <div className="points">
        <p>Player A: {points.A}</p>
        <p>Player B: {points.B}</p>
      </div>

      <div className="stats">
        {games.map((game, key) => (
          <div key={key}>
            <p style={{ color: game.A == "1" ? "green" : "red" }}>{game.A}</p>
            <p style={{ color: game.B == "1" ? "green" : "red" }}>{game.B}</p>
          </div>
        ))}
      </div>

      {!over ? (
        <>
          <div className="controls">
            <div className="player">
              <p>Player A</p>

              {["1", "0"].map((d, key) => (
                <Button
                  key={key}
                  id={d}
                  disabled={playerA}
                  onClick={() => setPlayerA(d)}
                >
                  {d === "1" ? "C" : "D"}
                </Button>
              ))}
            </div>

            {gameMode === "1" && (
              <div className="player">
                <p>Player B</p>

                {["1", "0"].map((d, key) => (
                  <Button
                    key={key}
                    id={d}
                    disabled={playerB}
                    onClick={() => setPlayerB(d)}
                  >
                    {d === "1" ? "C" : "D"}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </>
      ) : (
        <button onClick={reset}>Again</button>
      )}
    </div>
  );
};

function GameComp() {
  const [gameMode, setGameMode] = useState(false);
  const [numRounds, setNumRounds] = useState(10);

  return (
    <div className="game">
      {!gameMode && (
        <div>
          <p>
            How many rounds: {numRounds}
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

export default GameComp;
