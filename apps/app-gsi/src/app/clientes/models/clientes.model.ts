export class Cliente {
  _id?: string;
  nombresCompletos: string;
  direccion: string;
  fechadeNacimiento: Date;
  celular: string;

  constructor(
    nombresCompletos: string,
    direccion: string,
    fechadeNacimiento: Date,
    celular: string,
  ) {
    this.nombresCompletos = nombresCompletos;
    this.direccion = direccion;
    this.fechadeNacimiento = fechadeNacimiento;
    this.celular = celular;
  }
}
