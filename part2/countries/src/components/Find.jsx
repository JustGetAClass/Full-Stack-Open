/* eslint-disable react/prop-types */

const Find = ({ search, handler }) => {
  return (
    <div>
      find countries:
      <input value={search} onChange={handler} />
    </div>
  );
};

export default Find;
