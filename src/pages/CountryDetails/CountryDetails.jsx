import { useState, useEffect, useMemo } from 'react';
import {Link, useParams} from 'react-router-dom';
import './CountryDetails.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function CountryDetails({mode}) {
    const {country} = useParams();
    const [countryDetails, setCountryDetails] = useState();
    const [borderCountries, setBorderCountries] = useState([]);

    // let countryDetails = useMemo(() => {
    //     console.log(country);
    //     return getCountryDetails(country)
    // }, [])

    // const countryDetails = useMemo(() => {
    //     console.log("country: ", country);
    //     return getCountryDetails(country)
    // }, [country])

    // const borderCountries = useMemo(() => {
    //     console.log("details: ", countryDetails);
    //     return getBordersCountry();        
    // }, [countryDetails])
    

    // useEffect(() => {
    //     getCountryDetails(country);        
    // }, [])
    
    useEffect(() => {        
        getCountryDetails(country);        
    }, [country])

    useEffect(() => {
        getBorderCountries(countryDetails);        
    }, [countryDetails])

    const getCountryDetails = (country) => {
        if(country) {
            fetch(`https://restcountries.com/v3.1/name/${country}?fields=name,flags,population,region,subregion,capital,tld,currencies,languages,borders,ccn3`)
            .then(res => res.json())
            .then(data => setCountryDetails(data[0]))
            .catch(err => console.log(err));
        }
    }

    const getBorderCountries = (countryDetails) => {
        if(countryDetails) {
            if(countryDetails.borders) {
                const codes = countryDetails.borders.join(',');
                fetch(`https://restcountries.com/v3.1/alpha?codes=${codes}&fields=name,flags,population,region,subregion,capital,tld,currencies,languages,borders,ccn3`)
                .then(res => res.json())
                .then(data => setBorderCountries(data))
                .catch(err => console.log(err));
            }
        }
    }


  return (
    <section className={mode === "dark" ? "country-details-container dark" : "country-details-container"}>
        <Link to="/" >
            <button className="backBtn">
                <FontAwesomeIcon icon={faArrowLeft}/>
                <p>Back</p>
            </button>
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
                        <p><strong>Population: </strong> {countryDetails.population.toLocaleString()}</p>
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
                    <div className='btns'>
                    {
                        borderCountries.length > 0 &&
                        borderCountries.map((country, index) => (
                            <button key={country.ccn3}><Link  to={`/details/${country.name.common}`}>{country.name.common}</Link></button>
                        ))
                    }                    
                    </div>
                </div>
            </div>
        </div>
        }
    </section>
  )
}
