import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { FormComponent } from './components/form/form.component';
import { StockComponent } from './services/stock/stock.component';


@NgModule({
  declarations: [
    PageListComponent,
    FormComponent,
    StockComponent
  ],
  imports: [
    CommonModule,
    StockRoutingModule
  ]
})
export class StockModule { }
