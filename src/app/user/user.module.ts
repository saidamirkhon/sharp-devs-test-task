import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SignUpContainerComponent } from './containers/sign-up-container/sign-up-container.component';
import { UserContainerComponent } from './containers/user-container/user-container.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { LogInFormComponent } from './components/log-in-form/log-in-form.component';
import { LogInContainerComponent } from './containers/log-in-container/log-in-container.component';
import { userRoutes } from './user.routes';
import { RelativeToParentRoutePipeModule } from '../shared/pipes/relative-to-parent-route.pipe';

@NgModule({
  declarations: [
    SignUpContainerComponent,
    UserContainerComponent,
    SignUpFormComponent,
    LogInFormComponent,
    LogInContainerComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes),
    RelativeToParentRoutePipeModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class UserModule {
}
