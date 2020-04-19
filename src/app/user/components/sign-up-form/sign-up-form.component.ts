import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { IUserAuthInfo } from '../../models/user-auth-info';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CrossFieldErrorMatcher } from '../../utils/cross-field-error-matcher';
import { FormBaseComponent } from '../../../shared/components/form-base/form-base-component';
import { nonEmptyStringValidator } from '../../../shared/validators/non-empty-string-validator';
import { equalStringValuesValidator } from '../../../shared/validators/equal-string-values-validator';

@Component({
  selector: 'pw-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpFormComponent extends FormBaseComponent<IUserAuthInfo> {
  errorStateMatcher: ErrorStateMatcher = new CrossFieldErrorMatcher('equalValues');

  createForm(): FormGroup {
    return this.formBuilder
      .group(
        {
          username: ['',
            [
              Validators.required,
              nonEmptyStringValidator
            ]
          ],
          email: ['',
            [
              Validators.required,
              Validators.email
            ]
          ],
          password: ['',
            [
              Validators.required,
              nonEmptyStringValidator
            ]
          ],
          verifyPassword: ['',
            [
              Validators.required,
              nonEmptyStringValidator
            ]
          ]
        },
        {
          validators: [
            equalStringValuesValidator('password', 'verifyPassword')
          ]
        }
      );
  }

  getSubmitData(): IUserAuthInfo {
    const {username, email, password} = this.form.value;
    return {
      username,
      email,
      password
    };
  }

  constructor(formBuilder: FormBuilder) {
    super(formBuilder);
  }
}
