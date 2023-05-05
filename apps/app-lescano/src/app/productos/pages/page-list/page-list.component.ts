import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MetadataColumn } from 'src/app/interfaces/metadatacolumn.interface';
import { environment } from 'src/enviroments/enviroments';
import { FormComponent } from '../../components/form/form.component';
import { KeypadButton } from 'src/app/interfaces/keypadbutton.interface';

@Component({
  selector: 'les-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent {
  regitros: {
    _id: string,
    fecha: string,
    cliente:string,
    celular:string,
    producto:string,
    cantidad: number,
    formadepago:string;
  }[] = [
   {
    _id: "1",
    fecha: "2021-09-01",
    cliente:"Juan Perez",
    celular:"123456789",
    producto:"Arroz",
    cantidad: 15,
    formadepago: "Efectivo"
   }
  ]

  metaDataColumns:MetadataColumn[] = [
    {
      field: "_id",
      title: "ID"
    },
    {
      field: "fecha",
      title: "Fecha"
    },
    {
      field: "cliente",
      title: "Cliente"
    },
    {
      field: "celular",
      title: "Celular"
    },
    {
      field: "producto",
      title: "Producto"
    },
    {
      field: "cantidad",
      title: "Cantidad"
    },
    {
      field: "formadepago",
      title: "Forma de pago"
    }
  ]

  data:any[] = []

  totalRegistros = this.data.length

  constructor(private dialog:MatDialog){
    this.cargarClientes()
  }

  cargarClientes(){
    this.data = this.regitros
    this.totalRegistros = this.data.length
    this.changePage(0)
  }

  changePage(page:number){
    const pageSize = environment.PAGE_SIZE;

    const salto = pageSize * page;

    this.data = this.regitros.slice(salto, salto + pageSize);
  }

  abrirFormulario(fila:any = null){
    const opciones = {
      panelClass: 'panel-container',
      disabledClose: true,
      data: fila
    }
    const referencia:MatDialogRef<FormComponent> = this.dialog.open(FormComponent, opciones)

    referencia.afterClosed().subscribe((data:any) => {
        const index = this.regitros.findIndex((registro) => registro._id === data.id);
        const cliente = this.regitros[index];
        this.regitros[index] = {
          ...cliente,
          ...data
        };
        this.cargarClientes();
    }
    )
  }

  recibirDatos(data: any) {
    const formConId = {
      _id: this.regitros.length + 1,
      ...data
    }
    this.regitros.push(formConId);
    this.cargarClientes();
  }

  eliminar(fila:any = null){
    const index = this.regitros.findIndex((registro) => registro._id === fila._id);
    this.regitros.splice(index, 1);
    this.cargarClientes();
  }

  keypadButtons:KeypadButton[] = [
    {
      icon: "cloud_download",
      color: "accent",
      tooltip: "Exportar",
      accion: "download"
    },
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
      case "download":
        break;
    }
  }
}
