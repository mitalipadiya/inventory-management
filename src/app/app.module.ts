import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HeaderComponent } from './components/core/header/header.component';
import { StocksManagementComponent } from './components/stocks-management/stocks-management.component';
import { ConfirmationDialogComponent } from './components/core/confirmation-dialog/confirmation-dialog.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StockFormComponent } from './components/stocks-management/stock-form/stock-form.component';
import { SearchComponent } from './components/core/search/search.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StocksManagementComponent,
    HeaderComponent,
    ConfirmationDialogComponent,
    StockFormComponent,
    SearchComponent,
    SearchFilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbPaginationModule,
    HttpClientInMemoryWebApiModule.forRoot(
      // @ts-ignore
      InMemoryDataService,
      { dataEncapsulation: false }
    ),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
