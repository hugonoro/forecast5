# Forecast5

This project has the goal to do a simple integration with the [OpenWeatherMap](https://openweathermap.org/forecast5) API and return the forecast for the following 24 hours of a list of searched cities

At the moment it is doing a search by input text and populating a table of results whenever a new result is returned from the API.

For future work the search will be done by city ID ( as per recommendation on the API documentation ).

It's a simple minimalist UI that is not persisting the results and they will be lost upon refreshing the page.



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).



