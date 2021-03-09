import React from 'react';
import { Link } from "react-router-dom";
import '../sass/_country-card.scss';

const CountryCard = ({ name, population, region, capital, flag, alpha3Code }) => {

    return (
<Link to={`/countries/${alpha3Code}`} className="country-card">
        {/* <div className="country-card"> */}

            <svg className="country-card__flag"
                xmlns="http://www.w3.org/2000/svg">
                <image width='100%' height='100%' href={flag} />
            </svg>

            <div className="country-card__info">
                
                    <h2 className="country-card__name">{name}</h2>
                
                <div className="country-card__content">
                    <div className="content__item">Population:
                <span> {population}</span>
                    </div>
                    <div className="content__item">Region:
                <span> {region}</span>
                    </div>
                    <div className="content__item">Capital:
                <span> {capital}</span>
                    </div>
                </div>
            </div>
        {/* </div> */}
</Link>

    )
}

export default CountryCard
