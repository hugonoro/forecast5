import { Component, OnDestroy } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators/takeUntil';

import { ForecastResult } from './core/models/forecast';
import { DataService } from './core/data.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{

    destroyed$: Subject<boolean> = new Subject<boolean>();
    errorMessage: string;
    hasError: boolean = false;
    searchResult: ForecastResult;

    constructor(private dataService: DataService) {
    }

    onSearch(searchTerm): void {
        this.hasError = false;
        this.dataService.getForecastByCityName(searchTerm)
            .pipe(takeUntil(this.destroyed$))
            .subscribe(data => {
                this.searchResult = data;
            },(errorData) => {
                this.hasError = true;
                this.errorMessage = errorData.error.message
            })
    }

    ngOnDestroy(): void {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }
}
