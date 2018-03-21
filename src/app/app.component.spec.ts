import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataService } from './core/data.service';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';


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
