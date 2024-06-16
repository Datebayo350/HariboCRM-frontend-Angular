# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.4.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

---
## [FNM](https://github.com/Schniz/fnm?tab=readme-ov-file#manually) (_Fast Node Management_) - Nodejs versioning
The nodejs version is managed by FNM, to initialize and use it just follow the documentation steps, example with PowerShell in order :
* **winget install Schniz.fnm**
* **notepad $profile**

_then add the following command inside and close the file_ :
* **fnm env --use-on-cd | Out-String | Invoke-Expression**
* **fnm use "the desired Nodejs version"**

