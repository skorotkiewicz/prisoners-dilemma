import { useApp } from "../context/AppContext";

const End = () => {
  const { points, reset } = useApp();

  return (
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
  );
};

export default End;
