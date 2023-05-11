import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const average = (good + bad * -1) / total;
  const positive = (good * 100) / total;

  return (
    <div>
      <h1>give feedback</h1>

      <div>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </div>

      <h1>statistics</h1>

      <h3>good {good}</h3>
      <h3>neutral {neutral}</h3>
      <h3>bad {bad}</h3>
      <h3>all {total}</h3>
      <h3>average {isNaN(average) ? 0 : average}</h3>
      <h3>positive {isNaN(positive) ? 0 : positive}</h3>
    </div>
  );
};

export default App;
