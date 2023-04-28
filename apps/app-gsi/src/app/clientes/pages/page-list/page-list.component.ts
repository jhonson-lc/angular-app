import { Component } from '@angular/core';
import { MetadataColumn } from 'src/app/interfaces/metadatacolumn.interface';
import { environment } from 'src/enviroments/enviroments';

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

  constructor(){
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

  abrirFormulario(){}
  eliminar(){}
}
