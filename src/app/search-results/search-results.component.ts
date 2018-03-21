import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { ForecastResult } from '../core/models/forecast';

@Component({
    selector: 'app-search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnChanges {

    @Input() result: ForecastResult;

    searchResults: Array<ForecastResult> = [];

    constructor() {
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.result && changes.result.currentValue) {
            this.searchResults = [...this.searchResults, this.result];
        }
    }
}
