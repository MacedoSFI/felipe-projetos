# FelipeProjetos

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.10.

-------21/10/2021 apresenta com alguns erros ------------------------------------------------------------------------------------------------
Error: src/app/component/usuario/usuario.component.ts:13:3 - error TS2564: Property 'usuarios' has no initializer and is not definitely assigned in the constructor.

13   usuarios: Observable<Usuario[]>;
     ~~~~~~~~


Error: src/app/model/usuario.ts:2:3 - error TS2564: Property 'id' has no initializer and is not definitely assigned in the constructor.

2   id: Number;
    ~~


Error: src/app/model/usuario.ts:3:3 - error TS2564: Property 'nome' has no initializer and is not definitely assigned in the constructor.

3   nome: String;
    ~~~~


Error: src/app/model/usuario.ts:4:3 - error TS2564: Property 'email' has no initializer and is not definitely assigned in the constructor.

4   email: String;
    ~~~~~


Error: src/app/model/usuario.ts:5:3 - error TS2564: Property 'dtNascimento' has no initializer and is not definitely assigned in the constructor.

5   dtNascimento: Date;
    ~~~~~~~~~~~~


Error: src/app/service/header-interceptor.service.ts:30:5 - error TS1146: Declaration expected.

30   })
       


Error: src/app/service/header-interceptor.service.ts:30:5 - error TS7008: Member '(Missing)' implicitly has an 'any' type.

30   })
       


Error: src/app/service/header-interceptor.service.ts:33:14 - error NG6002: Appears in the NgModule.imports of AppModule, but could not be resolved to an NgModule class.

Is it missing an @NgModule annotation?

33 export class HttpInterceptorModule {}
                ~~~~~~~~~~~~~~~~~~~~~

---------------------------------------------------------------------------










## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
