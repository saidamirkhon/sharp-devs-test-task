import { ErrorStateMatcher } from '@angular/material/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm
} from '@angular/forms';

export class CrossFieldErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return control.touched && (!!(form.errors && form.errors[this.formError]) || !!control.errors);
  }

  constructor(public readonly formError: string) {
  }
}
