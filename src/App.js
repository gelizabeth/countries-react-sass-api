import React from "react";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";


import { useEffect, useState } from 'react';
import './app.scss';
import { CountryList } from './components/CountryList';
import Header from './components/Header'
import Country from "./components/Country";

function App() {


  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [countries, setCountries] = useState([]);
  const [theme, setTheme] = useState(true);


  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCountries(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  const toggleTheme = (value) => {
    setTheme(value);
  }



  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div class="wrap">
    <div class="loading">
      <div class="text">NOW LOADING</div>
    </div>
  </div>;
  } else {

    return (
      <div className={theme ? `App_light` : `App_dark`}>

        <Header theme={theme} onThemeToggle={toggleTheme}></Header>

        <Switch>
          <Route exact path="/">
            <CountryList countries={countries}></CountryList>
          </Route>
          <Route exact path='/countries/:id' children={<Country countries={countries} />}>

          </Route>
        </Switch>


      </div>

    );
  }
}




export default App;
