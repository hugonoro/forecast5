import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SearchComponentComponent } from './search-component/search-component/search-component.component';
import { CoreModule } from './core/core.module';

@NgModule({
    declarations: [
        AppComponent,
        SearchComponentComponent
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
