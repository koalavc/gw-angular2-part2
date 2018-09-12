import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  // Pipes alllow you to transform data.
  transform(items: any[], searchText: string): any[] {
    if (!items) { return []; }
    if (!searchText) { return items; }
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      return item.name.toLowerCase().includes(searchText);
    });
  }
}
