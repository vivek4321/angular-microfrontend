# Code Assignment
This code has a main Angular app, 1 sub-app (`/esp`) and 1 core UI library. Your task is to extend it. You can create new libraries, new apps, etc. 

You will be evaluated on effective use of state management (ngRX, actions, reducers and effects), common components and services and code coverage via tests.

Add 1 button in the main app to be able to access the 1 sub-app. 

## Add a new sub-app
Create a new sub-app called App4, to be accessed under `/app4` that will be lazy-loaded. Add a button for it in the main app.

## New chart
App4 will have a chart widget. You can use any chart library. It will show time series data (X-axis will be date/time, Y-axis will be multiple series of floats). The chart needs to provide a means for the user to specify the time-range - Last Hour, Day, Week. Based on the selection the chart needs to show the data of the selected time range. You can plot random data, however it should be loaded via a service. The service can simply provide fake data. Bonus points: have a NodeJS service that generates the fake data.

The chart in App4 will show 3 series in a single chart -  'Drive Frequency', 'Motor Current' and 'RPM'. 

You will need to re-use the chart widget in the ESP sub-app. In ESP, the chart will show 2 series in a single chart - 'SPM' and 'Pump Fillage'.

## Authentication and Authorization
You need to add authentication and authorization. You can use any free service (e.g Firebase auth) to enable login/logout workflows. Only logged in users should be able to view the list of apps. The list of apps should change based on the logged in user. E.g.: Have ESP and App4 available to a user and only App4 for another. It's up to you. 

## Submission
Send me (psamuel@slb.com) a zip file with your code. We can the have a call to discuss your approach. Let me know if you have any questions.

# AgoraAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
