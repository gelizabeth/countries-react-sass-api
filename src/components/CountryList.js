import React from 'react'
import CountryCard from './CountryCard'
import '../sass/_country-list.scss'

export const CountryList = ({ countries }) => {
    return (
        <div className="country-list">
            <input className=" fa country-list__search" placeholder="&#xF002; Search for a counrty..." />
            <select className="country-list__filter">
                <option value="All">Filter by region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
            <div className="country-list__container">
            {countries.map((country, index) => (
                    <CountryCard key={index} name={country.name} population={country.population} region={country.region} capital={country.capital} flag={country.flag}></CountryCard>
                ))}
            </div>
                
            
        </div>
    )
}
