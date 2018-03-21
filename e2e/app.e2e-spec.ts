import { AppPage } from './app.po';

describe('forecast5 App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display welcome message', () => {
        page.navigateHome();
        expect(page.getPageTitle()).toEqual('24 hours weather forecast');
    });

    it('should display input box by default', () => {
        page.navigateHome();
        expect(page.getSearchBox().isPresent()).toBe(true);
    });

    it('should display search button by default', () => {
        page.navigateHome();
        expect(page.getSearchButton().isPresent()).toBe(true);
    });

    it(' should not display table of results by default', () => {
        page.navigateHome();
        expect(page.getSearchResultsTable().isPresent()).toBe(false);
    });

    it('should display the table of results when a successful search is made', () => {
        page.navigateHome();

        page.getSearchBox().sendKeys('London');
        page.getSearchButton().click();

        expect(page.getSearchResultsTable().isPresent()).toBe(true);
    });

    it('should append every new result to the table of search results', () => {
        page.navigateHome();

        page.getSearchBox().sendKeys('London');
        page.getSearchButton().click();

        page.getSearchBox().clear();
        page.getSearchBox().sendKeys('Paris');
        page.getSearchButton().click();

        page.getSearchBox().clear();
        page.getSearchBox().sendKeys('Barcelona');
        page.getSearchButton().click();

        expect(page.getSearchResultItems().count()).toBe(3);
    });

    it('should not display error message by default', () => {
        page.navigateHome();
        expect(page.getError().isPresent()).toEqual(false);
    });

    it('should display an error message when a city is not found', () => {
        page.navigateHome();

        page.getSearchBox().sendKeys('Lz');
        page.getSearchButton().click();
        expect(page.getError().getText()).toEqual('city not found');

    });

    it('should hide a previous error message when a new successful search is made', () => {
        page.navigateHome();

        page.getSearchBox().sendKeys('Lz');
        page.getSearchButton().click();

        page.getSearchBox().clear();
        page.getSearchBox().sendKeys('Barcelona');
        page.getSearchButton().click();

        expect(page.getError().isPresent()).toEqual(false);
    })
});
