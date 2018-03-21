import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { CoreModule } from './core/core.module';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        SearchResultsComponent
    ],
    imports: [
        BrowserModule,
        CoreModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
