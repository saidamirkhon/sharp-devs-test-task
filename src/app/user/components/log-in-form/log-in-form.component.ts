import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { IUserAuthInfoLight } from '../../models/user-auth-info-light';
import { FormBaseComponent } from '../../../shared/components/form-base/form-base-component';
import { nonEmptyStringValidator } from '../../../shared/validators/non-empty-string-validator';

@Component({
  selector: 'pw-log-in-form',
  templateUrl: './log-in-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogInFormComponent extends FormBaseComponent<IUserAuthInfoLight> {
  createForm(): FormGroup {
    return this.formBuilder.group(
      {
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
        ]
      }
    );
  }

  getSubmitData(): IUserAuthInfoLight {
    const {email, password} = this.form.value;
    return {
      password,
      email
    };
  }

  constructor(formBuilder: FormBuilder) {
    super(formBuilder);
  }
}
