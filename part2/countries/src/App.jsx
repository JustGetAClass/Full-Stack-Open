import { useState, useEffect } from "react";
import data from "./services/fetchCountries";
import FilteredCountries from "./components/FilteredCountries";
import Find from "./components/Find";

const App = () => {
  const [country, setCountry] = useState(null);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    data().then((initialCountries) => setCountry(initialCountries));
  }, []);

  if (!country) {
    return null;
  }

  return (
    <div>
      <Find search={search} handler={handleSearch} />
      <FilteredCountries countries={country} search={search} />
    </div>
  );
};

export default App;
