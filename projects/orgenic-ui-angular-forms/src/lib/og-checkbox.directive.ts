import { Directive, forwardRef, HostListener, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: 'og-checkbox',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => OgCheckboxDirective),
      multi: true,
    }
  ]
})
export class OgCheckboxDirective implements ControlValueAccessor {
  private internalValue: boolean;

  constructor(private elementRef: ElementRef) {}

  onChange: any = () => {};
  onTouched: any = () => {};

  get value() {
    return this.internalValue;
  }

  set value(val) {
    if (val !== this.internalValue) {
      this.internalValue = val;
      this.onChange(this.internalValue);
      this.onTouched();
      this.elementRef.nativeElement.checked = val;
    }
  }

  @HostListener('changed', ['$event.detail'])
  listenForValueChange(value) {
    this.value = value;
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean) {
    this.elementRef.nativeElement.disabled = disabled;
  }
}
