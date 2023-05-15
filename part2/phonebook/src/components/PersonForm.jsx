const PersonForm = ({ submit, name, number, nameChange, numberChange }) => {
  return (
    <form onSubmit={submit}>
      <div>
        name:&nbsp;
        <input value={name} onChange={nameChange} />
      </div>
      <div>
        number:&nbsp;
        <input value={number} onChange={numberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
