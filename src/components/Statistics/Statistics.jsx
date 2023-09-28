import css from './Statistics.module.css';

export const Statistics = ({
  title,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <div className={css.statSection}>
    <h2 className={css.sectionName}>{title}</h2>
    <p className={css.statName}>Good: <span className={css.statValue}>{good}</span></p>
    <p className={css.statName}>Neurtal: <span className={css.statValue}>{neutral}</span></p>
    <p className={css.statName}>Bad: <span className={css.statValue}>{bad}</span></p>
    <p className={css.statName}>Total: <span className={css.statValue}>{total}</span></p>
    <p className={css.statName}>Positive feedback: <span className={css.statValue}>{positivePercentage}%</span></p>
  </div>
);