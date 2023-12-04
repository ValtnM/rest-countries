import './CountryCard.css';

export default function CountryCard({infos}) {
  return (
    <article>
        <img src={infos.flags.png} alt="" />
        <div className="country-details">
            <h2>{infos.name.common}</h2>
            <p><strong>Population:</strong> {infos.population}</p>
            <p><strong>Region:</strong> {infos.region}</p>
            <p><strong>Capital:</strong> {infos.capital ? infos.capital[0] : ""}</p>
        </div>
    </article>
  )
}
