import css from '../Options/Options.module.css'

export const Options = ({
  totalFeedback,
  handleReset,
  updateFeedback,
  valueOption: { good, neutral, bad, reset },
}) => {
  return (
    <div className={css.option}>
      <button onClick={() => updateFeedback("good")} type="button">
        {good}
      </button>
      <button onClick={() => updateFeedback("neutral")} type="button">
        {neutral}
      </button>
      <button onClick={() => updateFeedback("bad")} type="button">
        {bad}
      </button>
      {totalFeedback > 0 && (
        <button onClick={handleReset} type="button">
          {reset}
        </button>
      )}
    </div>
  );
};
