import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  BehaviorSubject,
  Observable
} from 'rxjs';
import { TokenService } from './token.service';
import { Router } from '@angular/router';
import { AppPaths } from '../../app.paths';
import {
  filter,
  map,
  switchMap
} from 'rxjs/operators';
import { IUserInfo } from '../../user/models/user-info';
import { IUserAuthInfo } from '../../user/models/user-auth-info';
import { IUserAuthResponse } from '../../user/models/user-auth-response';
import { IUserAuthInfoLight } from '../../user/models/user-auth-info-light';
import { IUserInfoResponse } from '../../user/models/user-info-response';
import { IFoundUser } from '../../user/models/found-user';
import { apiPaths } from '../api.paths';

@Injectable()
export class UserService {
  userInfo$: Observable<IUserInfo>;
  userNames$: Observable<string[]>;
  private fetchUserInfoTrigger$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private userSearchQuery$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  signUp(userInfo: IUserAuthInfo): Observable<IUserAuthResponse> {
    return this.http.post<IUserAuthResponse>(apiPaths().user.create, userInfo);
  }

  logIn(userInfo: IUserAuthInfoLight): Observable<IUserAuthResponse> {
    return this.http
      .post<IUserAuthResponse>(
        apiPaths().user.login,
        userInfo
      );
  }

  logOut(): void {
    this.tokenService.removeToken();
    this.router.navigate([AppPaths.USER]);
  }

  updateUserInfo(): void {
    this.fetchUserInfoTrigger$.next(true);
  }

  searchUsers(query: string): void {
    this.userSearchQuery$.next(query);
  }

  isAuthenticated(): boolean {
    return !!this.tokenService.getToken();
  }

  private fetchUserInfo(): Observable<IUserInfo> {
    return this.http
      .get<IUserInfoResponse>(apiPaths().user.info)
      .pipe(
        map((response: IUserInfoResponse) => response.user_info_token)
      );
  }

  private searchUsersByName(name: string): Observable<IFoundUser[]> {
    return this.http
      .post<IFoundUser[]>(
        apiPaths().user.list,
        {
          filter: name
        }
      );
  }

  private getUserInfo(): Observable<IUserInfo> {
    return this.fetchUserInfoTrigger$
      .pipe(
        switchMap(() => this.fetchUserInfo()),
      );
  }

  private getUserNames(): Observable<string[]> {
    return this.userSearchQuery$
      .pipe(
        filter((query: string) => !!query.length),
        switchMap((query: string) => this.searchUsersByName(query)),
        map((users: IFoundUser[]) => users.map((user: IFoundUser) => user.name))
      );
  }

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private router: Router
  ) {
    this.userInfo$ = this.getUserInfo();
    this.userNames$ = this.getUserNames();
  }
}
