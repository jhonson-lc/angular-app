import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'les-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() enviarDatos = new EventEmitter<any>();
  titulo=""
  formulario!: FormGroup

  constructor(private formBuilder: FormBuilder
    ){
    this.formulario = this.formBuilder.group({
      fecha: '',
      cliente: "",
      celular: "",
      producto: "",
      cantidad: 0,
      formadepago: "",
    });
  }

  ngOnInit(): void {
  }

  onSubmit(customerData:any) {
    this.enviarDatos.emit(customerData);
    this.formulario = this.formBuilder.group({
      fecha: "",
      cliente: "",
      celular: "",
      producto: "",
      cantidad: 0,
      formadepago: "",
    })
  }
}
