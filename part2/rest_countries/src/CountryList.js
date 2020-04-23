import React from "react";

const CountryList = (props) => {
    if (props.countries.length > 10) {
        return (
            <div>Too many countries, narrow your search</div>
        )
    } else {
        return (
            props.countries.map(country =>
                <div>
                    <h1>Name: {country.name}</h1>
                    <p>capital : {country.capital}</p>
                    <p>Population: {country.population}</p>

                    <h2>Languages: </h2>
                    <ul>
                        {country.languages.map(lang => <li>{lang.name}</li>)}
                    </ul>
                    <img src={country.flag} height='300' width='500' alt="Logo"/>
                </div>)
        )
    }
}

export default CountryList;