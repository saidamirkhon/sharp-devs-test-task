import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';
import { apiPaths } from '../api.paths';

@Injectable()
export class AppendTokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes(apiPaths().protected)) {
      return next
        .handle(
          req.clone({
            setHeaders: {
              Authorization: `Bearer ${this.tokenService.getToken()}`
            }
          })
        );
    }
    return next.handle(req);
  }

  constructor(private tokenService: TokenService) {
  }
}
