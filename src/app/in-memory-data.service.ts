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
        inStock: true,
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
        name: 'Pen1',
        description: 'Pin point Pen',
        price: 5,
        inStock: true,
      },
      {
        id: 14,
        name: 'Pen2',
        description: 'Pin point Pen',
        price: 5,
        inStock: true,
      },
      {
        id: 15,
        name: 'Pen3',
        description: 'Pin point Pen',
        price: 5,
        inStock: true,
      },
      {
        id: 16,
        name: 'Pen4',
        description: 'Pin point Pen',
        price: 5,
        inStock: true,
      },
      {
        id: 17,
        name: 'Pen5',
        description: 'Pin point Pen',
        price: 5,
        inStock: true,
      },
      {
        id: 18,
        name: 'Pen6',
        description: 'Pin point Pen',
        price: 5,
        inStock: true,
      },
      {
        id: 19,
        name: 'Pen7',
        description: 'Pin point Pen',
        price: 5,
        inStock: true,
      },
      {
        id: 20,
        name: 'Pen8',
        description: 'Pin point Pen',
        price: 5,
        inStock: true,
      },
    ];
    return { stocks };
  }
  genId(stocks: Stock[]): number {
    return stocks.length > 0
      ? Math.max(...stocks.map((stock) => stock.id)) + 1
      : 11;
  }
}
