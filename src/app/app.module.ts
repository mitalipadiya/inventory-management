import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HeaderComponent } from './components/core/header/header.component';
import { StocksManagementComponent } from './components/stocks-management/stocks-management.component';

@NgModule({
  declarations: [AppComponent, StocksManagementComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
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
