import React from 'react';
import './App.css';
import {WeatherReport} from "./views/WeatherReport/WeatherReport";
import {WeatherApi} from "./api/weatherApi";

function App() {
    return (
        <div className="App">
            <div>
                <WeatherReport weatherAPi={new WeatherApi()}/>
            </div>
        </div>
    );
}

export default App;
