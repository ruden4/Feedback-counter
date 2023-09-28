import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import {useState} from 'react';

export function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(s => s + 1);
        break;
      case 'neutral':
        setNeutral(s => s + 1);
        break;
      case 'bad':
        setBad(s => s + 1);
        break;
      default:
        break;
    
  };
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = ()=> {
    const totalResults = countTotalFeedback();
    const percentage = (good / totalResults) * 100 || 0;
    return Math.round(percentage);
  }
    const positiveFeedbackPercentage = countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
        <FeedbackOptions
            options={Object.keys({ good, neutral, bad })}
            leaveFeedback={onLeaveFeedback}
        />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={positiveFeedbackPercentage}
            />
          )}
        </Section>
      </>
    );
  }
