import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trackByProperty',
  standalone: true,
})
export class TrackByPropertyPipe implements PipeTransform {
  transform(items: any[], propertyName: string): any[] {
    if (!items || !propertyName) {
      return items;
    }

    return items.filter((item, index) => {
      return (
        index ===
        items.findIndex((obj) => obj[propertyName] === item[propertyName])
      );
    });
  }
}
