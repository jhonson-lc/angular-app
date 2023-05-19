import { Component, Inject } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "gsi-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent {
  titulo = "";
  formulario!: FormGroup;

  constructor(
    private referencia: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.titulo = data ? "EDICIÓN" : "NUEVO";
  }

  ngOnInit(): void {
    this.cargarFormulario();
  }

  grabar() {
    this.referencia.close(this.formulario.value);
  }

  cargarFormulario() {
    this.formulario = new FormGroup({
      id: new FormControl(this.data?._id),
      nombresCompletos: new FormControl(this.data?.nombresCompletos, Validators.required),
      fechadeNacimiento: new FormControl(this.data?.fechadeNacimiento, Validators.required),
      direccion: new FormControl(this.data?.direccion, Validators.required),
      celular: new FormControl(this.data?.celular),
    });
  }
}
