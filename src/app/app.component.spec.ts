import { TestBed, async, inject, ComponentFixture, tick, fakeAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DataService } from './core/data.service';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            imports: [
                HttpClientModule
            ],
            declarations: [
                AppComponent,
                SearchComponent,
                SearchResultsComponent
            ],
            providers: [
                DataService
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });
    it('should create the app', () => {
        // const fixture = TestBed.createComponent(AppComponent);
        // const app = fixture.debugElement.componentInstance;
        expect(component).toBeTruthy();
    });

    it(`should query the data service when a new search is made`, inject([DataService], (service: DataService) => {
        const mockSearch = 'Barcelona';

        const serviceSpy = spyOn(service, 'getForecastByCityName').and.callThrough();

        component.onSearch(mockSearch);

        expect(serviceSpy).toHaveBeenCalledTimes(1);
        expect(serviceSpy).toHaveBeenCalledWith(mockSearch);

    }));
})
;
