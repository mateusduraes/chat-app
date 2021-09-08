import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightStar',
})
export class HighlightStarPipe implements PipeTransform {
  transform(starIndex: number, value: string): boolean {
    return Number(value) >= starIndex;
  }
}
