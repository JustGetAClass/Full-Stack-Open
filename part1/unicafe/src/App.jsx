/* eslint-disable react/prop-types */
import { useState } from "react";

const Statistics = ({ feedback }) => {
  const total = feedback.good + feedback.neutral + feedback.bad;
  const average = (feedback.good + feedback.bad * -1) / total;
  const positive = (feedback.good * 100) / total;

  if (total === 0) {
    return <h2>No feedback given</h2>;
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticsLine text="good" stat={feedback.good} />
          <StatisticsLine text="neutral" stat={feedback.neutral} />
          <StatisticsLine text="bad" stat={feedback.bad} />
          <StatisticsLine text="all" stat={total} />
          <StatisticsLine text="average" stat={average} />
          <StatisticsLine text="positive" stat={positive + "%"} />
        </tbody>
      </table>
    </div>
  );
};

const Button = ({ clickEvent, text }) => {
  return <button onClick={clickEvent}>{text}</button>;
};

const Title = ({ text }) => {
  return <h1>{text}</h1>;
};

const StatisticsLine = ({ text, stat }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{stat}</td>
    </tr>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  return (
    <div>
      <Title text="give feedback" />

      <div>
        <Button
          clickEvent={() =>
            setFeedback({ ...feedback, good: feedback.good + 1 })
          }
          text="good"
        />
        <Button
          clickEvent={() =>
            setFeedback({ ...feedback, neutral: feedback.neutral + 1 })
          }
          text="neutral"
        />
        <Button
          clickEvent={() => setFeedback({ ...feedback, bad: feedback.bad + 1 })}
          text="bad"
        />
      </div>

      <Title text="statistics" />

      <Statistics feedback={feedback} />
    </div>
  );
};

export default App;
