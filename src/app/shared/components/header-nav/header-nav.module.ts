import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavComponent } from './header-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule
  ],
  declarations: [
    HeaderNavComponent
  ],
  exports: [
    HeaderNavComponent
  ]
})
export class HeaderNavModule {
}
