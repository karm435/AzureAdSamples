import React, {useState} from "react";
import {WeatherApi} from "api/weatherApi";
import {WeatherSummary} from "api/Domain/Weather/WeatherSummary";

type WeatherReportProps = {
    weatherAPi: WeatherApi
}

export const WeatherReport = (props: WeatherReportProps) => {
    const weatherAPi = props.weatherAPi;

    const [weathersummaries, setWeatherSummaries] = useState([] as WeatherSummary[]);

    const getWeatherSummaries = async () => {
        const summaries = await weatherAPi.getWeatherSummary();
        setWeatherSummaries(summaries);
    };

    return (
        <div>
            <div>
                <input type="button" value="Get Weather Summaries" onClick={() => getWeatherSummaries()}/>
                <input type="button" value="Logout"/>
            </div>
            {
                weathersummaries && weathersummaries.length > 0 ?
                    (
                        <div>
                            <p>Total summaries {weathersummaries.length}</p>
                            < ul>
                                {
                                    weathersummaries.map(summary => {
                                        return <li key={summary.temperatureC}>{summary.summary}</li>;
                                    })
                                }
                            </ul>
                        </div>
                    ) :
                    (
                        <div>There are no summaries</div>
                    )
            }
        </div>
    );
};
