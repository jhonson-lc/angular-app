import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MetadataColumn } from 'src/app/interfaces/metadatacolumn.interface';
import { environment } from 'src/enviroments/enviroments';
import { FormComponent } from '../../components/form/form.component';
import { KeypadButton } from 'src/app/interfaces/keypadbutton.interface';

@Component({
  selector: 'gsi-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent {
  regitros: {
    _id: string,
    nombresCompletos: string,
    direccion:string,
    fechadeNacimiento:string,
    celular:string
  }[] = [
    {
      _id:"1",
      nombresCompletos:"Carlos Ayala",
      direccion: "Av. Ambato",
      fechadeNacimiento: "10/12/1999",
      celular: "0987654321"
    },
    {
      _id:"2",
      nombresCompletos:"Juan Perez",
      direccion: "Av. Ambato",
      fechadeNacimiento: "10/12/1999",
      celular: "0987654321"
    },
    {
      _id:"3",
      nombresCompletos:"Maria Perez",
      direccion: "Av. Ambato",
      fechadeNacimiento: "10/12/1999",
      celular: "0987654321"
    },
    {
      _id:"4",
      nombresCompletos:"Pedro Perez",
      direccion: "Av. Ambato",
      fechadeNacimiento: "10/12/1999",
      celular: "0987654321"
    },
    {
      _id:"5",
      nombresCompletos:"Jose Perez",
      direccion: "Av. Ambato",
      fechadeNacimiento: "10/12/1999",
      celular: "0987654321"
    },
    {
      _id:"6",
      nombresCompletos:"Carlos Ayala",
      direccion: "Av. Ambato",
      fechadeNacimiento: "10/12/1999",
      celular: "0987654321"
    },
    {
      _id:"7",
      nombresCompletos:"Juan Perez",
      direccion: "Av. Ambato",
      fechadeNacimiento: "10/12/1999",
      celular: "0987654321"
    },
    {
      _id:"8",
      nombresCompletos:"Maria Perez",
      direccion: "Av. Ambato",
      fechadeNacimiento: "10/12/1999",
      celular: "0987654321"
    },
    {
      _id:"9",
      nombresCompletos:"Pedro Perez",
      direccion: "Av. Ambato",
      fechadeNacimiento: "10/12/1999",
      celular: "0987654321"
    },
    {
      _id:"10",
      nombresCompletos:"Jose Perez",
      direccion: "Av. Ambato",
      fechadeNacimiento: "10/12/1999",
      celular: "0987654321"
    },
    {
      _id:"11",
      nombresCompletos:"Carlos Ayala",
      direccion: "Av. Ambato",
      fechadeNacimiento: "10/12/1999",
      celular: "0987654321"
    },
    {
      _id:"12",
      nombresCompletos:"Juan Perez",
      direccion: "Av. Ambato",
      fechadeNacimiento: "10/12/1999",
      celular: "0987654321"
    },
    {
      _id:"13",
      nombresCompletos:"Maria Perez",
      direccion: "Av. Ambato",
      fechadeNacimiento: "10/12/1999",
      celular: "0987654321"
    },
    {
      _id:"14",
      nombresCompletos:"Pedro Perez",
      direccion: "Av. Ambato",
      fechadeNacimiento: "10/12/1999",
      celular: "0987654321"
    },
    {
      _id:"15",
      nombresCompletos:"Jose Perez",
      direccion: "Av. Ambato",
      fechadeNacimiento: "10/12/1999",
      celular: "0987654321"
    }
  ]

  metaDataColumns:MetadataColumn[] = [
    {
      field: "_id",
      title: "ID"
    },
    {
      field: "nombresCompletos",
      title: "Nombres Completos"
    },
    {
      field: "direccion",
      title: "Dirección"
    },
    {
      field: "fechadeNacimiento",
      title: "Fecha de Nacimiento"
    },
    {
      field: "celular",
      title: "Celular"
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
      if(data.id){
        const index = this.regitros.findIndex((registro) => registro._id === data.id);
        const cliente = this.regitros[index];
        this.regitros[index] = {
          ...cliente,
          ...data
        };
        this.cargarClientes();
      }else{
        const formConId = {
          _id: this.regitros.length + 1,
          ...data
        }
        this.regitros.push(formConId);
        this.cargarClientes();
      }
    }

    )
  }

  eliminar(){}

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
