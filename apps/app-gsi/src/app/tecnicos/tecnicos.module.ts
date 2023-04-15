import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TecnicosRoutingModule } from './tecnicos-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { FormComponent } from './components/form/form.component';
import { TecnicoComponent } from './servicios/tecnico/tecnico.component';


@NgModule({
  declarations: [
    PageListComponent,
    FormComponent,
    TecnicoComponent
  ],
  imports: [
    CommonModule,
    TecnicosRoutingModule
  ]
})
export class TecnicosModule { }
