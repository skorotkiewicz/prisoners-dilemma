const Stats = ({ games }) => {
  return (
    <div className="stats">
      {games.map((game, key) => (
        <div key={key}>
          <p style={{ color: game.A == "1" ? "green" : "red" }}>{game.A}</p>
          <p style={{ color: game.B == "1" ? "green" : "red" }}>{game.B}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
