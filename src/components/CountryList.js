import React from 'react'
import CountryCard from './CountryCard'
import '../sass/_country-list.scss'
import { Dropdown, DropdownButton, InputGroup, FormControl, Button } from 'react-bootstrap';

export const CountryList = ({ countries }) => {
    return (
        <div className="country-list">

            <InputGroup className="country-list__search">
                <InputGroup.Prepend>
                    <Button variant="outline-secondary"> <span className="fa"> &#xF002; </span></Button>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Search for a country..."
                    aria-label="Search for a country..."
                    aria-describedby="basic-addon1" />
            </InputGroup>
            <DropdownButton
                id="dropdown-basic-button"
                variant="country-list__filter"
                title="Filter by Region" >
                <Dropdown.Item href="#/action-1">Africa</Dropdown.Item>
                <Dropdown.Item href="#/action-2">America</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Asia</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Europe</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Oceania</Dropdown.Item>

            </DropdownButton>
            <div className="country-list__container">
                {countries.map((country, index) => (
                    <CountryCard key={index} name={country.name} population={country.population} region={country.region} capital={country.capital} flag={country.flag}></CountryCard>
                ))}
            </div>


        </div>
    )
}
