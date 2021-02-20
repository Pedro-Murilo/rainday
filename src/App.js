import { useState } from "react";
import { GlobalStyle } from "./globalStyle";
import RaindayVid from './video/rainday-vid.mp4';

const API_KEY = process.env.REACT_APP_KEY;
const API_BASE = process.env.REACT_APP_BASE;

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(`${API_BASE}weather?q=${query}&units=metric&APPID=${API_KEY}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
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
          <video src={RaindayVid} autoPlay muted loop/>
        </div>
      <div className="main">
        <main>
          <div className="container">
          <div className="input-div">
            <input
              type="text"
              placeholder="City..."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
          {typeof weather.main !== "undefined" ? (
            <>
              <div>
                <h2>
                  {weather.name}, {weather.sys.country}
                </h2>
                <h4>{dateBuilder(new Date())}</h4>
              </div>
              <div className="temp">
                <p>{Math.round(weather.main.temp)}&deg;C</p>
                <p>{weather.weather[0].main}</p>
              </div>
            </>
          ) : (
            ""
          )}
          </div>
        </main>
      </div>
      <GlobalStyle />
    </>
  );
}

export default App;
