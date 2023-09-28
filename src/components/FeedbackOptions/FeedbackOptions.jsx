import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, leaveFeedback }) => {
  return options.map(option => (
    <button
      className={css.button}
      key={option}
      type="button"
      onClick={() => leaveFeedback(option)}
    >
      {option}
    </button>
  ));
};