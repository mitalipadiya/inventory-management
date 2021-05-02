import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/stock';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-stocks-management',
  templateUrl: './stocks-management.component.html',
  styleUrls: ['./stocks-management.component.scss'],
})
export class StocksManagementComponent implements OnInit {
  stockData: Stock[] = [];

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.inventoryService.getStocks().subscribe((data) => {
      if (data) {
        this.stockData = [...data];
      }
    });
  }

  onEdit(item) {}
  onDelete(item) {}
}
