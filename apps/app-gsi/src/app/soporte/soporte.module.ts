import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoporteRoutingModule } from './soporte-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { FormComponent } from './components/form/form.component';
import { SoporteComponent } from './services/soporte/soporte.component';


@NgModule({
  declarations: [
    PageListComponent,
    FormComponent,
    SoporteComponent
  ],
  imports: [
    CommonModule,
    SoporteRoutingModule
  ]
})
export class SoporteModule { }
