import React from 'react'
import CountryCard from './CountryCard'
import '../sass/_country-list.scss'

export const CountryList = ({ countries }) => {
    return (
        <div className="country-list">
            <input className=" fa country-list__search" placeholder="&#xF002; Search for a counrty..." />
            <div className="country-list__filter"></div>
            <div className="country-list__container">
            {countries.map((country, index) => (
                    <CountryCard key={index} name={country.name} population={country.population} region={country.region} capital={country.capital} flag={country.flag}></CountryCard>
                ))}
            </div>
                
            
        </div>
    )
}
