import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IUserAuthResponse } from '../../user/models/user-auth-response';
import { TokenService } from '../services/token.service';
import { apiPaths } from '../api.paths';

@Injectable()
export class SaveTokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const {user: {create, login}} = apiPaths();
    const authenticationApiPaths = [
      create,
      login
    ];
    const isAuthenticationApiPath = authenticationApiPaths
      .some((path: string) => req.url.includes(path));
    if (isAuthenticationApiPath) {
      return next
        .handle(req)
        .pipe(
          tap((event: HttpEvent<IUserAuthResponse>) => {
            if (event instanceof HttpResponse) {
              this.tokenService.saveToken(event.body.id_token);
            }
          })
        );
    }
    return next.handle(req);
  }

  constructor(private tokenService: TokenService) {
  }
}
