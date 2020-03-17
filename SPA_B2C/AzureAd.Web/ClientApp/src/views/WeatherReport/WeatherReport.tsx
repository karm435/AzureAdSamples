import React, {useEffect, useState} from "react";
import {WeatherApi} from "api/weatherApi";
import {getAccountName} from 'services/securityService'
import {WeatherSummary} from "api/Domain/Weather/WeatherSummary";

type WeatherReportProps = {
    weatherAPi: WeatherApi
}

export const WeatherReport = (props: WeatherReportProps) => {
    const weatherAPi = props.weatherAPi;

    const [weathersummaries, setWeatherSummaries] = useState([] as WeatherSummary[]);
    const [accountName, setAccountName] = useState("");
    useEffect(() => {
        const accountName = getAccountName();
        setAccountName(accountName);
    },[])
    const getWeatherSummaries = async () => {
        const summaries = await weatherAPi.getWeatherSummary();
        setWeatherSummaries(summaries);
    };



    return (
        <div>
            <div>
                Welcome <label>{accountName}</label> !
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
