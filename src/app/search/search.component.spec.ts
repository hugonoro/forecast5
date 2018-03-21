import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('SearchComponent', () => {
    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;
    let searchBoxElement: DebugElement;
    let searchButtonElement: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;

        searchBoxElement = fixture.debugElement.query(By.css('.search-box'));
        searchButtonElement = fixture.debugElement.query(By.css('.search-button'));

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should emit search term upon search', () => {
        const mockSearch = 'London';

        component.search
            .subscribe(searchTerm => {
                expect(searchTerm).toEqual(mockSearch);
            });

        component.searchByText(mockSearch);
    });

    it('should emit search when clicking the search button', () => {
        const mockSearch = 'Madrid';

        searchBoxElement.nativeElement.value = mockSearch;

        component.search
            .subscribe(searchTerm => {
                expect(searchTerm).toEqual(mockSearch);
            });

        searchButtonElement.triggerEventHandler('click', null);

    })
});
