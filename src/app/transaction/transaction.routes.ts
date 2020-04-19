import { Route } from '@angular/router';
import { TransactionContainerComponent } from './containers/transaction-container/transaction-container.component';
import { TransactionPaths } from './transaction.paths';
import { TransactionListContainerComponent } from './containers/transaction-list-container/transaction-list-container.component';
import { CreateTransactionContainerComponent } from './containers/create-transaction-container/create-transaction-container.component';
import { AuthenticatedUserGuard } from '../core/guards/authenticated-user.guard';

export const transactionRoutes: Route[] = [
  {
    path: '',
    canActivate: [AuthenticatedUserGuard],
    canActivateChild: [AuthenticatedUserGuard],
    component: TransactionContainerComponent,
    children: [
      {
        path: '',
        redirectTo: TransactionPaths.LIST,
        pathMatch: 'full'
      },
      {
        path: TransactionPaths.LIST,
        component: TransactionListContainerComponent
      },
      {
        path: TransactionPaths.CREATE,
        component: CreateTransactionContainerComponent
      },
      {
        path: '**',
        redirectTo: TransactionPaths.LIST
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
