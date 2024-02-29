import React from 'react';
import Navbar from '../components/Navbar';
import useInput from '../hooks/useInput';
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useInput('');
  const [weather, setWeather] = React.useState('');
  const [temp, setTemp] = React.useState('');
  const [pressure, setPressure] = React.useState('');
  const [humidity, setHumidity] = React.useState('');

  const handleClick = async () => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=1b1bf1d7557dc1217b62e19155141727`
    );
    const { data } = res;
    setWeather(data.weather[0].description);
    setTemp(data.main.temp + ' °C');
    setPressure(data.main.pressure + ' hPa');
    setHumidity(data.main.humidity + ' %');
  };

  return (
    <div>
      <Navbar />
      <section className="container p-8 text-center flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold p-2 m-2">Open Weather</h1>
        <p>
          <input
            className="border-b-4 border-b-blue-900 rounded-lg p-2 text-xl focus:outline-none text-black"
            onChange={setCity}
            type="text"
          />
          <button
            className="border-2 border-teal-800 rounded-lg p-2 text-xl text-center transition ease-in-out delay-150 active:scale-95 bg-gradient-to-r from-emerald-500 to-teal-500 drop-shadow-md hover:drop-shadow-2xl"
            onClick={handleClick}
          >
            Find Weather
          </button>
        </p>
        <section className="result-container p-4 m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4">
          <div className="weather border-2 p-4 m-4 rounded-lg backdrop-blur-md drop-shadow-xl">
            <p>Weather:</p>
            <p className="font-bold" id="weather-description">
              {weather ? weather : '_ _'}
            </p>
          </div>
          <div className="temp border-2 p-4 m-4 rounded-lg backdrop-blur-md drop-shadow-xl">
            <p>Temperature:</p>
            <p className="font-bold" id="temp">
              {temp ? temp : '_ _'}
            </p>
          </div>
          <div className="windSpeed border-2 p-4 m-4 rounded-lg backdrop-blur-md drop-shadow-xl">
            <p>Pressure:</p>
            <p className="font-bold" id="wind-speed">
              {pressure ? pressure : '_ _'}
            </p>
          </div>
          <div className="humidity border-2 p-4 m-4 rounded-lg backdrop-blur-md drop-shadow-xl">
            <p>Humidity:</p>
            <p className="font-bold" id="humidity">
              {humidity ? humidity : '_ _'}
            </p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Weather;
