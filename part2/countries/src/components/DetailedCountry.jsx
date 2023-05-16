/* eslint-disable react/prop-types */
const DetailedCountry = ({ country }) => {
  const languages = country.languages;
  const langArr = [];
  for (const key in languages) {
    langArr.push(languages[key]);
  }
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>

      <h3>languages</h3>
      <ul>
        {langArr.map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} />
    </div>
  );
};

export default DetailedCountry;
