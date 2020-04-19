import {
  FormGroup,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms';

export function equalStringValuesValidator(...controlNames: string[]): ValidatorFn {
  return (formGroup: FormGroup): ValidationErrors | null => {
    let value = null;
    for (const controlName of controlNames) {
      if (!controlName || !controlName.trim().length) {
        continue;
      }
      const control = formGroup.controls[controlName];
      if (!control) {
        continue;
      }
      const controlValue = control.value;
      if (!value) {
        value = controlValue;
        continue;
      }
      if (value !== controlValue) {
        return {
          equalValues: true
        };
      }
    }
    return null;
  };
}
