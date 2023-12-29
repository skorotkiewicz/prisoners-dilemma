const Points = ({ points }) => {
  return (
    <div className="points">
      <p>Player A: {points.A}</p>
      <p>Player B: {points.B}</p>
    </div>
  );
};

export default Points;
