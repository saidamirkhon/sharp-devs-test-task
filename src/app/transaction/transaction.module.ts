import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionContainerComponent } from './containers/transaction-container/transaction-container.component';
import { RouterModule } from '@angular/router';
import { transactionRoutes } from './transaction.routes';
import { TransactionListContainerComponent } from './containers/transaction-list-container/transaction-list-container.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionService } from './services/transaction.service';
import { CreateTransactionContainerComponent } from './containers/create-transaction-container/create-transaction-container.component';
import { TransactionFormComponent } from './components/transaction-form/transaction-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSortModule } from '@angular/material/sort';
import { HeaderNavModule } from '../shared/components/header-nav/header-nav.module';
import { SearchInputDirectiveModule } from '../shared/directives/search-input.directive';

@NgModule({
  declarations: [
    TransactionContainerComponent,
    TransactionListContainerComponent,
    TransactionListComponent,
    CreateTransactionContainerComponent,
    TransactionFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(transactionRoutes),
    ReactiveFormsModule,
    HeaderNavModule,
    SearchInputDirectiveModule,
    MatBadgeModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSortModule
  ],
  providers: [
    TransactionService
  ]
})
export class TransactionModule {
}
