import './CountryList.css';
import CountryCard from '../CountryCard/CountryCard';
import { useState, useEffect } from 'react';
export default function CountryList() {

    const [countries, setCountries] = useState([]);
    const [regions, setRegions] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState("");

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => {
            setCountries(data);
            setRegions(selectContinents(data));
        })
    }, [])

    useEffect(() => {
        if(selectedRegion){
            fetch(`https://restcountries.com/v3.1/region/${selectedRegion}`)
            .then(res => res.json())
            .then(data => setCountries(data))
        }
    }, [selectedRegion])

    useEffect(() => {
        console.log(countries);
    }, [countries])

    const selectContinents = (countriesArray) => {
        let regionsArray = [];
        countriesArray.forEach(country => {
            // country.continents.forEach(continent => {
            //     if(!continentsArray.includes(continent)){
            //         continentsArray.push(continent);
            //     }
            // })
            if(!regionsArray.includes(country.region)){
                regionsArray.push(country.region);
            }
        })
        console.log(regionsArray);
        return regionsArray;
    }

const handleSelect = (e) => {
    setSelectedRegion(e.target.value);
}

  return (
    <section>
        <div className="sort-container">            
            <div className="search-bar">
                <input type="search" placeholder='Search for a country...'/>
            </div>
            {
                regions.length > 0 &&
                <div className="filter">
                <select onChange={handleSelect} name="continent" id="continent">
                    <option value="">Select a region</option>
                    {
                        regions.map((region, index) => (
                            <option key={index} value={region}>{region}</option>
                        ))
                    }
                </select>
            </div>
            }
        </div>
        <div className="countries-cards">
            {
                countries.length > 0 &&
                countries.map((country, index) => (
                    <CountryCard key={index} infos={country} />
                ))
            }
        </div>
    </section>
  )
}
