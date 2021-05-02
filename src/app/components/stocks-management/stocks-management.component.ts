import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogService } from 'src/app/services/confirmation-dialog.service';
import { Stock } from 'src/app/stock';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-stocks-management',
  templateUrl: './stocks-management.component.html',
  styleUrls: ['./stocks-management.component.scss'],
})
export class StocksManagementComponent implements OnInit {
  stockData: Stock[] = [];

  constructor(
    private inventoryService: InventoryService,
    private confirmationDialogService: ConfirmationDialogService
  ) {}

  ngOnInit(): void {
    this.inventoryService.getStocks().subscribe((data) => {
      if (data) {
        this.stockData = [...data];
      }
    });
  }

  onEdit(item) {}
  onDelete(item): void {
    // @ts-ignore
    this.confirmationDialogService.confirm(
        'Stock Deletion',
        `Are you sure you want to delete ${item.name}?`
      )
      .then((confirmed) => {
        if (confirmed) {
          this.inventoryService.deleteStock(item.id).subscribe((data) => {
            this.stockData = this.stockData.filter(
              (stock) => stock.id != item.id
            );
          });
        }
      })
      .catch(() =>
        console.log(
          'User dismissed the dialog'
        )
      );
  }
  trackById(index: number, stock: Stock): number {
    return stock.id;
}
}
