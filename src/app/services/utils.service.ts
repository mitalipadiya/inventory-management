import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  addAtStart(array, data): any {
    const allArray = [...array];
    allArray.unshift(data);
    return [...allArray];
  }
  deleteFromArray(array, data): any {
    return array.filter((dt) => dt.id !== data.id);
  }
  editElementInArray(array, data): any {
    const allArray = [...array];
    const index = allArray.findIndex((p) => p.id === data.id);
    allArray[index] = data;
    return [...allArray];
  }
}
