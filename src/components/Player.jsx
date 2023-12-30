import { useApp } from "../context/AppContext";
import Button from "./Button";

const Player = ({ id, player, setPlayer, gameMode }) => {
  const { mq, session } = useApp();

  return (
    <div
      className="player"
      style={{
        opacity: player ? "50%" : "100%",
      }}
    >
      <p>Player {id}</p>

      {["1", "0"].map((d, key) => (
        <Button
          key={key}
          id={d}
          disabled={player}
          onClick={() => {
            if (gameMode === "2") {
              mq.current.publish(`/!/dilemma/${session}/${id}/`, d);
            } else {
              setPlayer(d);
            }
          }}
        >
          {d === "1" ? "C" : "D"}
        </Button>
      ))}
    </div>
  );
};

export default Player;
