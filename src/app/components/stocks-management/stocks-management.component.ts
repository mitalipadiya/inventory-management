import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogService } from 'src/app/services/confirmation-dialog.service';
import { UtilsService } from 'src/app/services/utils.service';
import { Stock } from 'src/app/stock';
import { InventoryService } from '../../services/inventory.service';
import { StockFormComponent } from './stock-form/stock-form.component';

@Component({
  selector: 'app-stocks-management',
  templateUrl: './stocks-management.component.html',
  styleUrls: ['./stocks-management.component.scss'],
})
export class StocksManagementComponent implements OnInit {
  stockData: Stock[] = [];
  searchTerm = '';
  page = 1;
  pageSize = 4;
  collectionSize: number;

  constructor(
    private inventoryService: InventoryService,
    private confirmationDialogService: ConfirmationDialogService,
    private modalService: NgbModal,
    private utilsService: UtilsService
  ) {}

  ngOnInit(): void {
    this.getStockData();
  }

  getStockData() {
    this.inventoryService.getStocks().subscribe((data) => {
      if (data) {
        this.stockData = [...data];
      }
    });
  }

  onEdit(item) {
    const ref = this.modalService.open(StockFormComponent, { centered: true });
    ref.componentInstance.modalData = { stock: item, type: 'Edit' };

    ref.result.then(
      (stock) => {
        this.stockData = this.utilsService.editElementInArray(
          this.stockData,
          stock
        );
      },
      (cancel) => {}
    );
  }

  onAdd() {
    const ref = this.modalService.open(StockFormComponent, { centered: true });
    ref.componentInstance.modalData = { type: 'Add' };

    ref.result.then(
      (stock) => {
        //fallback for id generation if MOCK API generate id as 0
        if (stock && stock.id === 0) {
          stock.id =
            this.stockData.length > 0
              ? Math.max(...this.stockData.map((stock) => stock.id)) + 1
              : 11;
          this.stockData = this.utilsService.addAtStart(this.stockData, stock);
        }
      },
      (cancel) => {}
    );
  }
  onDelete(item): void {
    // @ts-ignore
    this.confirmationDialogService.confirm(
        'Stock Deletion',
        `Are you sure you want to delete ${item.name}?`
      )
      .then((confirmed) => {
        if (confirmed) {
          this.inventoryService.deleteStock(item.id).subscribe((data) => {
            this.stockData = this.utilsService.deleteFromArray(
              this.stockData,
              item
            );
          });
        }
      })
      .catch(() => {});
  }
  trackById(index: number, stock: Stock): number {
    return stock.id;
  }
  onSearched($event) {
    this.searchTerm = $event;
  }
}
