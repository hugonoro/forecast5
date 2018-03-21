import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as moment from 'moment';

describe('DataServiceService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [DataService]
        });
    });

    it('should be created', inject([DataService], (service: DataService) => {
        expect(service).toBeTruthy();
    }));

    it('should return a ForecastResult observable ',
        inject([DataService, HttpTestingController], (service: DataService, httpMock: HttpTestingController) => {
            const mockCity = 'Lisbon';
            const mockCountry = 'PT';
            const mockTime = moment().add(1, 'day').unix();

            service.getForecastByCityName(mockCity)
                .subscribe(response => {
                    expect(response.city).toEqual(mockCity);
                    expect(response.country).toEqual(mockCountry);
                    expect(response.dayForecast.length).toBe(1);
                    expect(response.dayForecast[0].time).toEqual(moment(mockTime * 1000).format('LT'));
                    expect(response.dayForecast[0].temperature).toEqual(6);
                });
            const req = httpMock.expectOne(`http://api.openweathermap.org/data/2.5/forecast?q=${mockCity}&appid=f716aded6c764248a5c95131fcd5ab24&units=metric`);

            req.flush({
                'city': {
                    'name': mockCity,
                    'country': mockCountry,
                },
                'list': [
                    {
                        'dt': mockTime,
                        'main': {
                            'temp': 6,
                        },
                    }
                ]
            })
        })
    );

    afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
        httpMock.verify();
    }));
});
