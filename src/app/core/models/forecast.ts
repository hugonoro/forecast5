export interface ForecastResult {
    city: string;
    country: string;
    dayForecast: Array<TimeForecast>
}

export interface TimeForecast {
    time: string;
    temperature: number;
}
