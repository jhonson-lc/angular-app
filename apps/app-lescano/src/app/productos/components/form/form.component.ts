import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'gsi-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  titulo=""
  formulario!: FormGroup

  constructor(private referencia: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any){
      this.titulo=data ? "EDICIÓN" : 'NUEVO'
    }

    ngOnInit(): void {
      this.cargarFormulario()
    }

    grabar(){
      this.referencia.close(this.formulario.value)
    }

    cargarFormulario(){
      this.formulario = new FormGroup({
        id: new FormControl(this.data?._id),
        fecha: new FormControl(this.data?.fecha,Validators.required),
        cliente: new FormControl(this.data?.cliente,Validators.required),
        producto: new FormControl(this.data?.producto,Validators.required),
        cantidad: new FormControl(this.data?.cantidad,Validators.required),
        celular: new FormControl(this.data?.celular),
        formadepago: new FormControl(this.data?.formadepago)
      })
    }
}
