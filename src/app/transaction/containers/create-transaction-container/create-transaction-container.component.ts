import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { ITransactionInfo } from '../../models/transaction-info';
import { TransactionService } from '../../services/transaction.service';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import { TransactionPaths } from '../../transaction.paths';
import { Observable } from 'rxjs';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'pw-create-transaction-container',
  templateUrl: './create-transaction-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateTransactionContainerComponent {
  userNames$: Observable<string[]> = this.userService.userNames$;

  createTransaction(transactionInfo: ITransactionInfo): void {
    this.transactionService
      .create(transactionInfo)
      .subscribe(() => {
        this.userService.updateUserInfo();
        this.router.navigate([TransactionPaths.LIST], {relativeTo: this.route.parent});
      });
  }

  searchUsersByName(query: string): void {
    this.userService.searchUsers(query);
  }

  goToTransactionList(): void {
    this.router.navigate([TransactionPaths.LIST], {relativeTo: this.route.parent});
  }

  constructor(
    private transactionService: TransactionService,
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute
  ) {
  }
}
