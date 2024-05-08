export default function OptoinsBtn({ value, onCount, onReset, changeBtn }) {
  return (
    <div>
      <button onClick={changeBtn}>Good: {value}</button>
      <button onClick={onCount}>Neutral: {value}</button>
      <button onClick={onCount}>Bad: {value}</button>
      <button onClick={onReset}>Reset:</button>
    </div>
  );
}
