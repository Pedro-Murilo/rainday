import { useState } from 'react';
import { GlobalStyle } from './globalStyle';
import RaindayVid from './video/rainday-vid.mp4';

import { WeatherContainer } from './WeatherStyle';

const api = {
  base: 'https://api.openweathermap.org/data/2.5/',
};

const API_KEY = process.env.REACT_APP_KEY;

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = (event) => {
    if (event.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${API_KEY}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery('');
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <>
      <div>
        <div>
          {/* <video src={RaindayVid} autoPlay muted loop /> */}
        </div>
        <WeatherContainer>
          <main>
            <div className='search-content'>
              <input
                type="text"
                placeholder="City..."
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                onKeyPress={search}
              />
            </div>
            {typeof weather.main !== 'undefined' ? (
              <>
                <div>
                  <h2>
                    {weather.name}, {weather.sys.country}
                  </h2>
                  <h4>{dateBuilder(new Date())}</h4>
                </div>
                <div>
                  <p>{Math.round(weather.main.temp)}&deg;c</p>
                  <p>{weather.weather[0].main}</p>
                </div>
              </>
            ) : (
              ''
            )}
          </main>
        </WeatherContainer>
      </div>
      <GlobalStyle />
    </>
  );
}

export default App;
