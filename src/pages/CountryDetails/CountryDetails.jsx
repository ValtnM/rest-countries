import { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import './CountryDetails.css';

export default function CountryDetails({mode}) {
    const {country} = useParams();
    const [countryDetails, setCountryDetails] = useState();
    const [borderCountries, setBorderCountries] = useState([]);


    useEffect(() => {
        getCountryDetails(country);        
    }, [])

    useEffect(() => {        
        getCountryDetails(country);
    }, [country])

    useEffect(() => {
        if(countryDetails) {
            if(countryDetails.borders) {
                const codes = countryDetails.borders.join(',');
                fetch(`https://restcountries.com/v3.1/alpha?codes=${codes}`)
                .then(res => res.json())
                .then(data => setBorderCountries(data))
                .catch(err => console.log(err));
            }
        }
    }, [countryDetails])

    const getCountryDetails = (country) => {
        if(country) {
            fetch(`https://restcountries.com/v3.1/name/${country}`)
            .then(res => res.json())
            .then(data => setCountryDetails(data[0]))
            .catch(err => console.log(err));
        }
    }

  return (
    <section className={mode === "dark" ? "country-details-container dark" : "country-details-container"}>
        <Link to="/" className="backBtn">
            <p>Back</p>
        </Link>
        {
            countryDetails &&
        <div className="country">
            <img src={countryDetails.flags.png} alt={`Drapeau de ${countryDetails.name.common}`} />
            <div className="infos">
                <h2>{countryDetails.name.common}</h2>
                <div className="details">
                    <div>
                        <p><strong>Native Name: </strong> {Object.values(countryDetails.name.nativeName)[0].common}</p>
                        <p><strong>Population: </strong> {countryDetails.population}</p>
                        <p><strong>Region: </strong> {countryDetails.region}</p>
                        <p><strong>Sub Region: </strong> {countryDetails.subregion}</p>
                        <p><strong>Capital: </strong> {countryDetails.capital}</p>
                    </div>
                    <div>
                        <p><strong>Top Level Domain: </strong> {countryDetails.tld}</p>
                        <p><strong>Currencies: </strong> {Object.values(countryDetails.currencies)[0].name}</p>
                        <p><strong>Languages: </strong> {Object.values(countryDetails.languages)[0]}</p>
                    </div>
                </div>
                <div className="neighbours">
                    <p><strong>Border Countries: </strong></p>
                    {
                        borderCountries.length > 0 &&
                        borderCountries.map((country, index) => (
                            <button><Link key={index} to={`/details/${country.name.common}`}>{country.name.common}</Link></button>
                        ))
                    }                    
                </div>
            </div>
        </div>
        }
    </section>
  )
}
