import React, {useState, useEffect} from 'react'
import CountryCard from './CountryCard'
import '../sass/_country-list.scss'
import { Dropdown, DropdownButton, InputGroup, FormControl, Button } from 'react-bootstrap';

export const CountryList = ({ countries }) => {

    const [countriesDisplay, setCountriesDisplay] = useState([]);
    const [filter, setFilter] = useState('');


    
    useEffect(() => {

        setCountriesDisplay(countries);
        
    }, [countries]);

    useEffect(() => {

        if(filter!==''){
            setCountriesDisplay (countries.filter( country => country.region === filter));
        } else  setCountriesDisplay(countries);
        
    }, [filter]);

    const addFilter = (event) => {
        //get everything after #/ and set is as a filter
        let userFilter = event.target.href.split('#/').pop();
        if(filter === userFilter) {
            setFilter('');
        } else setFilter(userFilter);
        
    }
    
    
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
                title={filter ? filter : 'Filter by region'} >
                <Dropdown.Item href="#/Africa" onClick={addFilter}>Africa</Dropdown.Item>
                <Dropdown.Item href="#/Americas" onClick={addFilter}>America</Dropdown.Item>
                <Dropdown.Item href="#/Asia" onClick={addFilter}>Asia</Dropdown.Item>
                <Dropdown.Item href="#/Europe" onClick={addFilter}>Europe</Dropdown.Item>
                <Dropdown.Item href="#/Oceania" onClick={addFilter}>Oceania</Dropdown.Item>

            </DropdownButton>
            <div className="country-list__container">
                {countriesDisplay.map((country, index) => (
                    <CountryCard key={index} name={country.name} population={country.population} region={country.region} capital={country.capital} flag={country.flag}></CountryCard>
                ))}
            </div>


        </div>
    )
}
