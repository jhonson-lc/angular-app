import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { TitleComponent } from './components/title/title.component';
import { DownloadComponent } from './components/download/download.component';
import { KeypadButtonComponent } from './components/keypad-button/keypad-button.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { ContainerComponent } from './components/container/container.component';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [
    PaginatorComponent,
    TitleComponent,
    DownloadComponent,
    KeypadButtonComponent,
    ConfirmComponent,
    ContainerComponent,
    TableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginatorComponent,
    TitleComponent,
    DownloadComponent,
    KeypadButtonComponent,
    ConfirmComponent,
    ContainerComponent,
    TableComponent
  ]
})
export class SharedModule { }
