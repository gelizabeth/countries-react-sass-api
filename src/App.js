import { useEffect, useState } from 'react';
import './app.scss';

import './sass/light-theme.scss'
import './sass/dark-theme.scss'
import { CountryList } from './components/CountryList';
import Header from './components/Header'

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
    return <div>Loading...</div>;
  } else {
    
    return (
      <div className={theme ? `App_light` : `App_dark`}>
        <Header theme={theme} onThemeToggle={toggleTheme}></Header>
        <CountryList countries={countries}></CountryList>
      </div>

    );
  }
}




export default App;
