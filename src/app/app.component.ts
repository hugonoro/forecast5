import { Component } from '@angular/core';
import { ForecastResult } from './core/models/forecast';
import { DataService } from './core/data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    searchResult: ForecastResult;


    constructor(private dataService: DataService) {
    }

    onSearch(searchTerm): void {
        this.dataService.getForecastByCityName(searchTerm)
            .subscribe(data => {
                this.searchResult = data;
            })
    }
}
