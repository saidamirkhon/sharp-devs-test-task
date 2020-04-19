import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { Observable } from 'rxjs';
import { IUserInfo } from '../../../user/models/user-info';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'pw-transaction-container',
  templateUrl: './transaction-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionContainerComponent {
  userInfo$: Observable<IUserInfo> = this.userService.userInfo$;

  logOut(): void {
    this.userService.logOut();
  }

  constructor(
    private userService: UserService,
  ) {
  }
}
