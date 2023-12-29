import { useState } from "react";
import Game from "./Game";

function App() {
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

      {gameMode && <Game gameMode={gameMode} numRounds={numRounds} />}
    </div>
  );
}

export default App;
