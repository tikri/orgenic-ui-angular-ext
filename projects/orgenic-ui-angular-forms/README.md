# OrgenicUiAngularForms

This module can be used in angular projects to use ngModel bindings with [ORGENIC UI](https://github.com/orgenic/orgenic-ui) components.

## Installation
```npm i orgenic-ui-angular-forms```

app.module.ts
```typescript
@NgModule({
    declarations: [
      // ...
    ],
    imports: [
      // ...
      OrgenicUiAngularFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
```


## Text Input
```html
<og-text-input [(ngModel)]="name" ngDefaultControl><og-text-input>
```

## Checkbox
```html
<og-checkbox [(ngModel)]="enabled" ngDefaultControl><og-checkbox>
```
