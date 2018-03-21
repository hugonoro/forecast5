import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-search-component',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    @Output() search: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit() {
    }

    searchByText(searchTerm: string): void {
        this.search.emit(searchTerm);
    }
}
