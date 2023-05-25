export class Equipo {
  _id?: string;
  club: string;
  encargado: string;
  ciudad: string;
  fecha: string;
  telefono: string;

  constructor(
    club: string,
    encargado: string,
    ciudad: string,
    fecha: string,
    telefono: string,
  ) {
    this.club = club;
    this.encargado = encargado;
    this.ciudad = ciudad;
    this.fecha = fecha;
    this.telefono = telefono;
  }
}
