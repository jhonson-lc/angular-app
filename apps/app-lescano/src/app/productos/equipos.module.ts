import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageListComponent } from './pages/page-list/page-list.component';
import { FormComponent } from './components/form/form.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    PageListComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule,
    CoreModule,
  ],
  exports:[
    PageListComponent,
    FormComponent
  ]
})
export class ProductosModule { }
