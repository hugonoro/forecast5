import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

import * as moment from 'moment';

import { ForecastResult } from './models/forecast';


@Injectable()
export class DataService {

    constructor(public httpClient: HttpClient) {
    }

    getForecastByCityName(cityName: string): Observable<ForecastResult> {
        return this.httpClient.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=f716aded6c764248a5c95131fcd5ab24&units=metric`)
            .pipe(
                map((forecastData: any) => {
                    return {
                        'city': forecastData.city.name,
                        'country': forecastData.city.country,
                        'dayForecast': forecastData.list
                            .filter(dayData => moment(dayData.dt * 1000).isBefore(moment().add(24, 'hour'), 'hour'))
                            .map(dayData => {
                                return {
                                    'time': moment(dayData.dt * 1000).format('LT'),
                                    'temperature': dayData.main.temp
                                }
                            })
                    }
                })
            )
    }
}
