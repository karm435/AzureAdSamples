import {WeatherSummary} from "api/Domain/Weather/WeatherSummary";
import {getAccessTokenSilently} from "../services/securityService";

export class WeatherApi {
    apiUrl = "https://localhost:44321/api";

    getWeatherSummary = async (): Promise<WeatherSummary[]> => {
        let authResponse = await getAccessTokenSilently();

        const headers = new Headers();
        headers.append("Authorization", `Bearer ${authResponse.accessToken}`);
        try {

            const response = await fetch(`${this.apiUrl}/WeatherForecast`, {headers: headers});
                return response.json().then(result => result as WeatherSummary[]);
        } catch (e) {
            console.error(e);

            return [];
        }
    };
}