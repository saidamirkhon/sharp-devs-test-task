import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { ITransactionInfo } from '../../models/transaction-info';
import { FormBaseComponent } from '../../../shared/components/form-base/form-base-component';
import { nonEmptyStringValidator } from '../../../shared/validators/non-empty-string-validator';

@Component({
  selector: 'pw-transaction-form',
  templateUrl: './transaction-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionFormComponent extends FormBaseComponent<ITransactionInfo> {
  @Output() searchUsers: EventEmitter<string> = new EventEmitter<string>();
  @Input() userNames: string[] = [];

  createForm(): FormGroup {
    return this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          nonEmptyStringValidator
        ]
      ],
      amount: [
        0,
        [
          Validators.required,
          Validators.min(1)
        ]
      ]
    });
  }

  getSubmitData(): ITransactionInfo {
    const {name, amount} = this.form.value;
    return {
      name: name.trim(),
      amount
    };
  }

  searchUsersByName(query: string): void {
    this.searchUsers.emit(query);
  }

  constructor(formBuilder: FormBuilder) {
    super(formBuilder);
  }

}
