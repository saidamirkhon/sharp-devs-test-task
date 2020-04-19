import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  Observable
} from 'rxjs';
import { ITransactionResponse } from '../models/transaction-response';
import { ITransaction } from '../models/transaction';
import { HttpClient } from '@angular/common/http';
import { ITransactionInfo } from '../models/transaction-info';
import { map } from 'rxjs/operators';
import { UserService } from '../../core/services/user.service';
import { apiPaths } from '../../core/api.paths';

@Injectable()
export class TransactionService {
  list$: Observable<ITransaction[]>;
  private clonedList$: BehaviorSubject<ITransaction[]> = new BehaviorSubject<ITransaction[]>([]);

  clone(transaction: ITransaction): void {
    const {username: name, amount} = transaction;
    this.create({
      name,
      amount
    })
      .subscribe((clonedTransaction: ITransaction) => {
        this.userService.updateUserInfo();
        this.clonedList$
          .next(this.clonedList$.value.concat([clonedTransaction]));
      });
  }

  create(transactionInfo: ITransactionInfo): Observable<ITransaction> {
    return this.http
      .post<ITransactionResponse<ITransaction>>(apiPaths().transaction.create, transactionInfo)
      .pipe(
        map((response: ITransactionResponse<ITransaction>) => response.trans_token)
      );
  }

  private fetchList(): Observable<ITransaction[]> {
    return this.http
      .get<ITransactionResponse<ITransaction[]>>(apiPaths().transaction.list)
      .pipe(
        map((response: ITransactionResponse<ITransaction[]>) => response.trans_token)
      );
  }

  private getList(): Observable<ITransaction[]> {
    return combineLatest([
        this.fetchList(),
        this.clonedList$
      ]
    )
      .pipe(
        map(([list, clonedList]: [ITransaction[], ITransaction[]]) => list.concat(clonedList)),
      );
  }

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {
    this.list$ = this.getList();
  }
}
