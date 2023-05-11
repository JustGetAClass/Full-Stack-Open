/* eslint-disable react/prop-types */
import { useState } from "react";

const Button = ({ clickEvent, text }) => {
  return <button onClick={clickEvent}>{text}</button>;
};

const Title = ({ text }) => {
  return <h1>{text}</h1>;
};

const Anecdote = ({ quote, vote }) => {
  return (
    <div>
      <h3>{quote}</h3>
      <p>has {vote} votes</p>
    </div>
  );
};

const Highest = ({ votes, anecdote }) => {
  const max = Math.max(...votes);
  const highest = votes.indexOf(max);
  const mostVotes = anecdote[highest];

  if (max === 0) {
    return <h1>Go vote</h1>;
  }

  return <Anecdote quote={mostVotes} vote={votes[highest]} />;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const arrayLength = anecdotes.length;

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(Array(8).fill(0));

  return (
    <div>
      <Title text="Anecdote of the day" />
      <Anecdote quote={anecdotes[selected]} vote={vote[selected]} />
      <Button
        clickEvent={() => {
          const newVotes = [...vote];
          newVotes[selected] += 1;
          setVote(newVotes);
        }}
        text="vote"
      />
      <Button
        clickEvent={() => {
          const random = Math.floor(Math.random() * arrayLength);
          setSelected(random);
        }}
        text="next anecdote"
      />
      <Title text="Anecdote with most votes" />
      <Highest votes={vote} anecdote={anecdotes} />
    </div>
  );
};

export default App;
