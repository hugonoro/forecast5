import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-search-component',
    templateUrl: './search-component.component.html',
    styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent implements OnInit {

    @Output() search: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit() {
    }

    searchByText(searchTerm: string): void {
        this.search.emit(searchTerm);
    }
}
