import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-stocks-management',
  templateUrl: './stocks-management.component.html',
  styleUrls: ['./stocks-management.component.scss'],
})
export class StocksManagementComponent implements OnInit {
  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.inventoryService.getStocks().subscribe((data) => console.log(data));
  }
}
