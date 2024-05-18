import css from '../Feedback/Feedback.module.css'
export function Feedback({
  totalFeedback,
  positiveFeedback,
  feedback: { good, neutral, bad },
}) {
  return (
    <ul className={css.feedCss}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Positive: {positiveFeedback}%</li>
      <li>Total: {totalFeedback}</li>
    </ul>
  );
}
