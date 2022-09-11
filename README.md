# TestProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.2.

## Bootstrap support

npm install --save bootstrap@versionNumber
in angular.json add "node_modules/bootstrap/dist/css/bootstrap.css" to build/styles array

# Binding

## Data binding
it means to connect variables and functions from your typescript code and your HTML template
you have two ways to do this most of the time you can use both and endup with the same results

### string interpolation

this means to call a variable from the type script and display it on the template
{{ anything that return string }}
{{ service1 }}
{{ 'service2'}}
{{ getService3() }}
favoured when you just want to print a string

### property binding

is the act of binding an html property to a varible [property]="value"
[disabled]="isDiabled"
favored when wanting to change a proberty of an element

## Event binding
binding a proberty to a certain event by using the (eventName)="function()"
  <button (click)="onSave()">Save</button>

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
