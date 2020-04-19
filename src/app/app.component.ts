import {
  Component,
  HostBinding
} from '@angular/core';

@Component({
  selector: 'pw-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @HostBinding('class') classes = 'pw-page-wrapper';
}
