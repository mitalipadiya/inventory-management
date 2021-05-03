import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Stock } from './stock';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  // tslint:disable-next-line:typedef
  createDb() {
    const stocks = [
      {
        id: 11,
        name: 'Pen',
        description: 'Pin point Pen',
        price: 5,
        inStock: false,
      },
      {
        id: 12,
        name: 'Pencil',
        description: 'Apsara Pencil - Black Color',
        price: 5,
        inStock: true,
      },
      {
        id: 13,
        name: 'Eraser',
        description: 'Eraser',
        price: 5,
        inStock: true,
      },
      {
        id: 14,
        name: 'Sharpner',
        description: 'Sharpner',
        price: 5,
        inStock: true,
      },
      {
        id: 15,
        name: 'Scale',
        description: 'Scale',
        price: 5,
        inStock: true,
      },
      {
        id: 16,
        name: 'Notebook',
        description: 'Notebook',
        price: 5,
        inStock: true,
      }
    ];
    return { stocks };
  }
  genId(stocks: Stock[]): number {
    return stocks.length > 0
      ? Math.max(...stocks.map((stock) => stock.id)) + 1
      : 11;
  }
}
