import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MetadataColumn } from 'src/app/interfaces/metadatacolumn.interface';
import { environment } from 'src/enviroments/enviroments';
import { FormComponent } from '../../components/form/form.component';
import { KeypadButton } from 'src/app/interfaces/keypadbutton.interface';
import { EquipoService } from '../../services/equipo.service';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';

@Component({
  selector: 'les-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent {
  regitros: {
    _id: string,
    fecha: string,
    club:string,
    telefono:string,
    encargado:string,
    ciudad: string,
  }[] = []

  metaDataColumns:MetadataColumn[] = [
    {
      field: "_id",
      title: "ID"
    },
    {
      field: "club",
      title: "Club"
    },
    {
      field: "ciudad",
      title: "Ciudad"
    },
    {
      field: "telefono",
      title: "Telefono"
    },
    {
      field: "encargado",
      title: "Encargado"
    },
    { field: "fecha",
      title: "Fecha"
    }
  ]

  data:any[] = []

  totalRegistros = this.data.length

  dialogRef !: MatDialogRef<ConfirmComponent>;


  constructor(private dialog:MatDialog,private equipoService:EquipoService){
    this.cargarEquipos()
  }

  cargarEquipos(){
    // this.data = this.regitros
    // this.totalRegistros = this.data.length
    // this.changePage(0)

    this.equipoService.cargarEquipos().subscribe((db) => {
      this.data = db.data.teams;
      this.totalRegistros = this.data.length;
      this.changePage(0);
    });
  }

  changePage(page:number){
    const pageSize = environment.PAGE_SIZE;

    const salto = pageSize * page;

    this.data = this.data.slice(salto, salto + pageSize);
  }

  abrirFormulario(fila:any = null){
    const opciones = {
      panelClass: 'panel-container',
      disabledClose: true,
      data: fila
    }
    const referencia:MatDialogRef<FormComponent> = this.dialog.open(FormComponent, opciones)

    referencia.afterClosed().subscribe((data:any) => {
      if (data.id) {
        this.equipoService.actualizarEquipo(data.id, data).subscribe(() => {
          this.cargarEquipos();
        });
      } else {
        this.equipoService.registrarEquipo(data).subscribe(() => {
          this.cargarEquipos();
        });
      }
    }
    )
  }

  eliminar(fila:any = null){
    this.dialogRef = this.dialog.open(ConfirmComponent, {
      disableClose: false
    });
    this.dialogRef.componentInstance.mensaje = "Está seguro de eliminar este club?"

    this.dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.equipoService.eliminarEquipo(fila._id).subscribe(() => {
          this.cargarEquipos();
        });
      }
    });
  }

  keypadButtons:KeypadButton[] = [
    {
      icon: "add",
      color: "primary",
      tooltip: "Agregar",
      accion: "nuevo"
    },
  ]

  enviarAccion(accion:string){
    switch(accion){
      case "nuevo":
        this.abrirFormulario()
        break;
    }
  }
  eliminarAccion(accion:string){
    console.log("eliminarAccion",accion)
  }
}
