import { NgModule } from '@angular/core';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule
} from '@angular/common/http';
import { SaveTokenInterceptor } from './interceptors/save-token.interceptor';
import { AppendTokenInterceptor } from './interceptors/append-token.interceptor';
import { ApiErrorInterceptor } from './interceptors/api-error.interceptor';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AnonymousUserGuard } from './guards/anonymous-user.guard';
import { AuthenticatedUserGuard } from './guards/authenticated-user.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { PlatformService } from './services/platform.service';
import { TokenService } from './services/token.service';
import { UiNotificationService } from './services/ui-notification.service';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
  ],
  providers: [
    PlatformService,
    TokenService,
    UiNotificationService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SaveTokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppendTokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiErrorInterceptor,
      multi: true
    },
    AnonymousUserGuard,
    AuthenticatedUserGuard
  ]
})
export class CoreModule {
}
