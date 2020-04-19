import {
  ChangeDetectionStrategy,
  Component,
  HostBinding
} from '@angular/core';
import { UserPaths } from '../../user.paths';
import { IUserAuthInfoLight } from '../../models/user-auth-info-light';
import { Router } from '@angular/router';
import { AppPaths } from '../../../app.paths';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'pw-log-in-container',
  templateUrl: './log-in-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogInContainerComponent {
  @HostBinding('class') classes = 'pw-page-wrapper pw-center-x pw-center-y';
  UserPaths = UserPaths;

  logIn(userInfo: IUserAuthInfoLight): void {
    this.userService
      .logIn(userInfo)
      .subscribe(() => this.router.navigate([AppPaths.TRANSACTION]));
  }

  constructor(
    private userService: UserService,
    private router: Router
  ) {
  }

}
