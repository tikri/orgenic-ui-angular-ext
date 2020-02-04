import { NgModule } from '@angular/core';
import { OgTextInputDirective } from './og-text-input.directive';
import { OgCheckboxDirective } from './og-checkbox.directive';

const FORMS_DIRECTIVES = [
  OgCheckboxDirective,
  OgTextInputDirective,
];

@NgModule({
  declarations: FORMS_DIRECTIVES,
  imports: [
  ],
  exports: FORMS_DIRECTIVES
})
export class OrgenicUiAngularFormsModule { }
