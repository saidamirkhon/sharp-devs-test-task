import {
  ChangeDetectionStrategy,
  Component,
  HostBinding
} from '@angular/core';
import { UserPaths } from '../../user.paths';
import { Router } from '@angular/router';
import { IUserAuthInfo } from '../../models/user-auth-info';
import { AppPaths } from '../../../app.paths';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'pw-sign-up-container',
  templateUrl: './sign-up-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpContainerComponent {
  @HostBinding('class') classes = 'pw-page-wrapper pw-center-x pw-center-y';
  UserPaths = UserPaths;

  signUp(userInfo: IUserAuthInfo): void {
    this.userService
      .signUp(userInfo)
      .subscribe(() => this.router.navigate([AppPaths.TRANSACTION]));
  }

  constructor(
    private userService: UserService,
    private router: Router
  ) {
  }

}
