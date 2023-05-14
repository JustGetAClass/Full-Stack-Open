/* eslint-disable react/prop-types */
import Part from "./Part";

const Content = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      {parts.map((part) => (
        <Part part={part} key={part.id} />
      ))}

      <h3>total of {total} exercises</h3>
    </div>
  );
};

export default Content;
