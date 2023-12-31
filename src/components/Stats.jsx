import { useRef, useEffect } from "preact/hooks";

const Stats = ({ games }) => {
  const ref = useRef();
  const scroll = () => ref.current.scrollIntoView({ behavior: "instant" });

  useEffect(scroll, [games]);

  return (
    <div className="stats">
      {games.map((game, key) => (
        <div key={key}>
          <p style={{ color: game.A == "1" ? "green" : "red" }}>{game.A}</p>
          <p style={{ color: game.B == "1" ? "green" : "red" }}>{game.B}</p>
        </div>
      ))}
      <span ref={ref}></span>
    </div>
  );
};

export default Stats;
