import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short',
  // use pure: false if you want the pipe to be re-evaluated on every change detection cycle
  pure: false,
})
export class ShortPipe implements PipeTransform {
  transform(value: any, limit: number) {
    if (value.length > limit) {
      return value.substr(0, limit) + '...';
    }
    return value;
  }
}
