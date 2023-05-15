const Filter = ({search, handleSearch}) => {
  return (
    <div>
      filter shown with:&nbsp;
      <input value={search} onChange={handleSearch} />
    </div>
  );
};

export default Filter;
