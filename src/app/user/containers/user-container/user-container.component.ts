import {
  ChangeDetectionStrategy,
  Component,
  HostBinding
} from '@angular/core';

@Component({
  selector: 'pw-user-container',
  templateUrl: './user-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserContainerComponent {
  @HostBinding('class') classes = 'pw-page-wrapper';

}
