# OrgenicUiAngularForms

This module can be used in angular projects to use ngModule bindings with ORGENIC UI components.

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
<og-text-input [(ngModule)]="name" ngDefaultControl><og-text-input>
```

## Checkbox
```html
<og-checkbox [(ngModule)]="enabled" ngDefaultControl><og-checkbox>
```
