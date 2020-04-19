import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { ITransaction } from '../../models/transaction';
import { Observable } from 'rxjs';
import { TransactionService } from '../../services/transaction.service';
import { TransactionPaths } from '../../transaction.paths';
import {
  ActivatedRoute,
  Router
} from '@angular/router';

@Component({
  selector: 'pw-transaction-list-container',
  templateUrl: './transaction-list-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionListContainerComponent {
  list$: Observable<ITransaction[]> = this.transactionService.list$;

  cloneTransaction(transaction: ITransaction): void {
    this.transactionService.clone(transaction);
  }

  goToCreateTransaction(): void {
    this.router.navigate([TransactionPaths.CREATE], {relativeTo: this.route.parent});
  }

  constructor(
    private transactionService: TransactionService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }
}
