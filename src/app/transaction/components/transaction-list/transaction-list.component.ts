import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ViewChild
} from '@angular/core';
import { ITransaction } from '../../models/transaction';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'pw-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionListComponent implements OnChanges {
  @Input() list: ITransaction[] = [];
  @Output() clone: EventEmitter<ITransaction> = new EventEmitter<ITransaction>();
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = [
    'date',
    'username',
    'amount',
    'balance',
    'cloneAction'
  ];
  dataSource: MatTableDataSource<ITransaction>;

  handleClone(transaction: ITransaction): void {
    this.clone.emit(transaction);
  }

  trackByTransactionId(index: number, transaction: ITransaction): number {
    return transaction.id;
  }

  ngOnChanges(): void {
    if (this.list) {
      this.setTableDataSource(this.list);
    }
  }

  private setTableDataSource(list: ITransaction[]): void {
    this.dataSource = new MatTableDataSource<ITransaction>(list);
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (item: ITransaction, property: string): string | number => {
      switch (property) {
        case 'date':
          return +new Date(item.date);
        default:
          return item[property];
      }
    };
  }
}
