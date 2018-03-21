export interface ForecastResult {
    city: string;
    country: string;
    dayForecast: Array<TimeForecast>
}

export interface TimeForecast {
    temperature: number;
    time: string;
}
