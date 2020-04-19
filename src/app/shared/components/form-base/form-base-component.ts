import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';

@Component({
  template: ''
})
export abstract class FormBaseComponent<T> {
  readonly fieldErrorMessages = {
    valueIsRequired: 'Value is required.',
    valueIsInvalid: 'Provided value is invalid.',
    valueIsEmpty: 'Empty value is not allowed.',
    passwordsNotMatch: 'Passwords do not match.',
    valueIsNotPositive: 'Please provide positive number.'
  };
  readonly form: FormGroup;
  @Output() private formSubmit: EventEmitter<T> = new EventEmitter<T>();

  submitForm(): void {
    this.formSubmit.emit(this.getSubmitData());
  }

  protected abstract createForm(): FormGroup;

  protected abstract getSubmitData(): T;

  protected constructor(protected formBuilder: FormBuilder) {
    this.form = this.createForm();
  }

}
