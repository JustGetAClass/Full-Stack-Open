/* eslint-disable react/prop-types */
import { useState } from "react";
import DetailedCountry from "./DetailedCountry";
const Country = ({ country }) => {
  const [click, setClick] = useState(false);
  const handleButton = () => {
    setClick(!click);
  };
  return (
    <li>
      {country.name.common}
      <button onClick={handleButton}>{click ? "hide" : "show"}</button>
      {click ? <DetailedCountry country={country} /> : null}
    </li>
  );
};

export default Country;
