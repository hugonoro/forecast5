import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponentComponent } from './search-component.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('SearchComponentComponent', () => {
    let component: SearchComponentComponent;
    let fixture: ComponentFixture<SearchComponentComponent>;
    let searchBoxElement: DebugElement;
    let searchButtonElement: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchComponentComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchComponentComponent);
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
