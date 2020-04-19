import {
  NgModule,
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'pwRelativeToParentRoute'
})
export class RelativeToParentRoutePipe implements PipeTransform {
  transform(value: string): string {
    return `../${value}`;
  }
}

@NgModule({
  declarations: [RelativeToParentRoutePipe],
  exports: [RelativeToParentRoutePipe]
})
export class RelativeToParentRoutePipeModule {
}
