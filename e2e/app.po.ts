import { browser, by, element } from 'protractor';

export class AppPage {
    navigateHome() {
        return browser.get('/');
    }

    getPageTitle() {
        return element(by.css('h1')).getText();
    }

    getSearchBox() {
        return element(by.css('.search-box'));
    }

    getSearchButton() {
        return element(by.css('.search-button'));
    }

    getSearchResultsTable() {
        return element(by.css('.search-results'));
    }

    getSearchResultItems() {
        return element.all(by.css('.search-result-item'));
    }

    getError() {
        return element(by.css('.error'));
    }
}
