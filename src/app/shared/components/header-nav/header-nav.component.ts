import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'pw-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss'],
})
export class HeaderNavComponent {
  @Output() logOut: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ContentChild('userInfoTemplate') userInfoTemplate: ElementRef;

  handleLogOut(): void {
    this.logOut.emit(true);
  }
}
