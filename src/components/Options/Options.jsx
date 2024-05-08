export default function OptoinsBtn({ value, onCount, onReset}) {
  return (
    <div>
      <button onClick={onCount}>Good: {value}</button>
      <button onClick={onCount}>Neutral: {value}</button>
      <button onClick={onCount}>Bad: {value}</button>
      <button onClick={onReset}>Reset:</button>
    </div>
  );
}
