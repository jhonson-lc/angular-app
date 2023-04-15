import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoberturaRoutingModule } from './cobertura-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { FormComponent } from './components/form/form.component';
import { CoberturaComponent } from './services/cobertura/cobertura.component';


@NgModule({
  declarations: [
    PageListComponent,
    FormComponent,
    CoberturaComponent
  ],
  imports: [
    CommonModule,
    CoberturaRoutingModule
  ]
})
export class CoberturaModule { }
