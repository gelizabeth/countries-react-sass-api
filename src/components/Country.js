import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useParams, useHistory } from 'react-router-dom';
import '../sass/_country.scss';

const Country = ({ countries }) => {
    let { id } = useParams();
    const [country, setCountry] = useState();
    const [borders, setBorders] = useState();

    let history = useHistory();

    //updates current country after fetching data and after changing id
    useEffect(() => {
        setCountry(countries.find(country => country.alpha3Code === id));
    }, [countries, id]);

    //set borders when country change
    useEffect(() => {
        setBorders(country?.borders?.map(border => {
            let fullCountry = countries.find(country => country.alpha3Code === border);
            return { 'code': border, 'name': fullCountry.name }
        }));
    }, [country]);

    //back button
    const handleClick = () => {
        history.goBack();
    }

    return (
        <div className="country">
            <button type="button" className="button country__button" onClick={handleClick}>
                Back
            </button>
            <img className="country__flag" src={country?.flag} />
            <div className="country__name">{country?.name}</div>
            <div className="country__content">
                <div className="container">
                    <div className="content__item"><span>Native Name:</span> {country?.nativeName}</div>
                    <div className="content__item"><span>Population:</span> {country?.population}</div>
                    <div className="content__item"><span>Region:</span> {country?.region}</div>
                    <div className="content__item"><span>Sub Region:</span> {country?.subregion}</div>
                    <div className="content__item"><span>Capital:</span> {country?.capital}</div>
                </div>
                <div className="content__lists">
                    <div className="content__item"><span>Top Level Domain:</span> {country?.topLevelDomain}</div>
                    <div className="content__item"><span>Currencies:</span> {country?.currencies.map(currency => currency.name)}</div>
                    <div className="content__item"><span>Languages:</span> {country?.languages.map(language => ` ${language.name}`)}</div>
                </div>
            </div>
            <div className="country__borders">
                <h3>Border Countries: </h3>
                <div className="borders__container">
                    {borders?.map(border => <Link className="button country__link" key={border.code} to={`/countries/${border.code}`} >{border.name}</Link>)}
                </div>
            </div>
        </div>
    )
}

export default Country
