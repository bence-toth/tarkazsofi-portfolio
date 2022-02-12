import "./stripes.css";

const Stripes = () => (
  <div className="stripes">
    {Array(35)
      .fill(0)
      .map((_, i) => (
        <div key={i} />
      ))}
  </div>
);

export default Stripes;
