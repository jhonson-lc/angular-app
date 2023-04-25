import { Component, ContentChildren, Input, QueryList, SimpleChanges, ViewChildren } from '@angular/core';
import { MatColumnDef } from '@angular/material/table';
import { MetadataColumn } from 'src/app/interfaces/metadatacolumn.interface';

@Component({
  selector: 'gsi-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {
  @Input() data: any
  @Input() metaDataColumns!: MetadataColumn[]
  columns: string[] = []

  @ContentChildren(MatColumnDef, {descendants: true}) columnDef!:QueryList<MatColumnDef>

  ngOnChanges(changes:SimpleChanges){
    if(changes['metaDataColumns']){
      this.columns = this.metaDataColumns.map(column => column.field)
    }
  }
}
