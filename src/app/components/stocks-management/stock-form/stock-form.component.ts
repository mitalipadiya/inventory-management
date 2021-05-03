import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { InventoryService } from 'src/app/services/inventory.service';
import { Stock } from 'src/app/stock';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.scss'],
})
export class StockFormComponent implements OnInit {
  modalData = {
    type: 'Add',
    stock: {},
  };
  stocksForm: FormGroup;
  stock: Stock = { id: 0, name: '', description: '', price: 0, inStock: false };

  constructor(
    private activeModal: NgbActiveModal,
    private inventoryService: InventoryService
  ) {}

  ngOnInit(): void {
    this.setFormData(this.modalData);
  }
  get name(): AbstractControl {
    return this.stocksForm.get('name');
  }
  get description(): AbstractControl {
    return this.stocksForm.get('description');
  }
  get price(): AbstractControl {
    return this.stocksForm.get('price');
  }
  get inStock(): AbstractControl {
    return this.stocksForm.get('inStock');
  }

  setFormData(data) {
    if (data && data.type == 'Edit' && data.stock) {
      this.stock = data.stock;
    }
    this.stocksForm = new FormGroup({
      id: new FormControl(this.stock.id),
      name: new FormControl(this.stock.name, [Validators.required]),
      description: new FormControl(this.stock.description, [
        Validators.required,
      ]),
      price: new FormControl(this.stock.price, [Validators.required]),
      inStock: new FormControl(this.stock.inStock, [Validators.required]),
    });
  }
  onSubmit(): void {
    if (this.modalData.type == 'Edit') {
      this.onEdit();
    } else {
      this.onCreate();
    }
  }
  public decline(): void {
    this.activeModal.close(false);
  }

  public dismiss(): void {
    this.activeModal.dismiss();
  }
  onEdit() {
    this.inventoryService
      .updateStock(this.stocksForm.value)
      .subscribe((stock) => {
        //sending directly stocksForm.value as respons is null due to mock API
        this.activeModal.close(this.stocksForm.value);
      });
  }
  onCreate() {
    this.inventoryService.addStock(this.stocksForm.value).subscribe((stock) => {
      this.activeModal.close(stock);
    });
  }
}
