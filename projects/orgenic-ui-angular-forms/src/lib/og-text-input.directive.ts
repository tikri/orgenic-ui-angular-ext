import { Directive, forwardRef, HostListener, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: 'og-text-input',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => OgTextInputDirective),
      multi: true
    }
  ]
})
export class OgTextInputDirective implements ControlValueAccessor {
  private internalValue: string;

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
      this.elementRef.nativeElement.value = val;
      const event = new CustomEvent('valueChanged', { detail: val });
      this.elementRef.nativeElement.dispatchEvent(event);
    }
  }

  @HostListener('valueChanged', ['$event.detail'])
  listenForValueChange(value) {
    this.value = value;
  }

  writeValue(value) {
    if (!value) {
      value = '';
    }
    this.value = value;
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
