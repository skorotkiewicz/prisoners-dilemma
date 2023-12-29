import Button from "./Button";

const Player = ({ id, player, setPlayer }) => {
  return (
    <div className="player">
      <p>Player {id}</p>

      {["1", "0"].map((d, key) => (
        <Button key={key} id={d} disabled={player} onClick={() => setPlayer(d)}>
          {d === "1" ? "C" : "D"}
        </Button>
      ))}
    </div>
  );
};

export default Player;
