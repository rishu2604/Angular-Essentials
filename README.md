# Essentials

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.

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

## How to import image

- Here the path of the assets folder is not correct/relative but we are still able to see that picture because of assets configuration in angular.json file
  <br>
  `"assets": ["src/favicon.ico", "src/assets"],`
  <br>
  `<img src="assets/task-management-logo.png" alt="A todo List" />`
  <br>

## Creating components through Angular CLI

`ng generate component <component_name>`
<br>
`ng g c <component_name>`

## Attribute Binding

In the previous lecture, you were introduced to "Property Binding" - a key Angular feature that allows you to bind element properties to dynamic values.

For example, <img [src]="someSrc"> binds the src property of the underlying HTMLImageElement DOM object to the value stored in someSrc.

Whilst it might look like you're binding the src attribute of the <img> tag, you're actually NOT doing that. Instead, property binding really targets the underlying DOM object property (in this case a property that's also called src) and binds that.

This might look like a subtle detail (and often it indeed doesn't matter) but it's important to understand this difference between element attributes and property. This article can help with understanding this difference.

Whilst it won't make a difference in Angular apps in many cases, it DOES matter if you're trying to set attributes on elements dynamically. Attributes which don't have an equally-named underlying property.

For example, when binding ARIA attributes, you can't target an underlying DOM object property.

Since "Property Binding" wants to target properties (and not attributes), that can be a problem. That's why Angular offers a slight variation of the "Property Binding" syntax that does allow you to bind attributes to dynamic values.

It looks like this:

```
<div
  role="progressbar"
  [attr.aria-valuenow]="currentVal"
  [attr.aria-valuemax]="maxVal">...</div>
```

By adding attr in front of the attribute name you want to bind dynamically, you're "telling" Angular that it shouldn't try to find a property with the specified name but instead bind the respective attribute - in the example above, the aria-valuenow and aria-valuemax attributes would be bound dynamically.

## Angular DOM Detection Mechanism

- Angular manages changes using state, and keep a check on the data stored in properties, which when changed, has an impact on the UI.
- And that data change has an impact on the UI due to how Angular's change detection mechanism works.
- Because Angular automatically detects and finds out when data changes and it then simply takes a look at the template of the component and verifies whether that template, now that the data changed, maybe produces a different DOM snapshot.
- And if that's the case, it goes ahead and updates the UI so that changes are reflected there.
- Angular does all of that automatically, and it does all of that automatically with help of a part of the Angular framework that's called **zone.js**.

## How zone.js works?

- It automatically listens to all possible user events that could occur on a website, as well as some other possible events that could occur, like a timer expiring or anything like that.
- And when such an event occurs, it checks the Angular application for possible changes.
