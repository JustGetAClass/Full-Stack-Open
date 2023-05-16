import Country from "./Country";
import DetailedCountry from "./DetailedCountry";

/* eslint-disable react/prop-types */
const FilteredCountries = ({ countries, search }) => {
  const filtered = countries.filter((c) =>
    c.name.common.toLowerCase().includes(search.toLowerCase())
  );
  const countriesLength = filtered.length;

  if (countriesLength > 10) {
    return <p>Too may matches, specify another filter</p>;
  }

  if (countriesLength === 1) {
    const lastCountry = filtered[0];

    return <DetailedCountry country={lastCountry} />;
  }

  if (countriesLength <= 10) {
    return (
      <ul>
        {filtered.map((c) => (
          <Country key={c.name.common} country={c} />
        ))}
      </ul>
    );
  }
};

export default FilteredCountries;
