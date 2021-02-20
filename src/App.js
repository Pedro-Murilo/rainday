import { useState } from "react";
import { GlobalStyle } from "./globalStyle";


const api = {
  key: "9d7ad32e1bb9ab58ca26241ea1d81bfc",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
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
        <main>
          <div>
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
              <div>
                <p>{Math.round(weather.main.temp)}&deg;c</p>
                <p>{weather.weather[0].main}</p>
              </div>
            </>
          ) : (
            ""
          )}
        </main>
      </div>
      <GlobalStyle />
    </>
  );
}

export default App;
