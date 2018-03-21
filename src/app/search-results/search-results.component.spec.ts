import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsComponent } from './search-results.component';
import { Component, ViewChild } from '@angular/core';

import { ForecastResult } from '../core/models/forecast';

@Component({
    template: '<app-search-results [result]="forecastResult"></app-search-results>'
})
class TestHostComponent {
    @ViewChild(SearchResultsComponent) searchResultsComponent: SearchResultsComponent;
    forecastResult: ForecastResult;
}

describe('SearchResultsComponent', () => {
    let component: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchResultsComponent, TestHostComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestHostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should append the the search result to the results array', () => {
        component.forecastResult = {
            'city': 'Paris',
            'country': 'FR',
            'dayForecast': [{
                'time': '03:00 AM',
                'temperature': 10
            }]
        };

        fixture.detectChanges();

        expect(component.searchResultsComponent.searchResults.length).toBe(1);
    })
});
