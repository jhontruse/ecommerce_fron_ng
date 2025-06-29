import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { switchMap } from 'rxjs';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './new-login.component.html',
  styleUrl: './new-login.component.css',
})
export class NewLoginComponent implements OnInit {
  miFormulario!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.miFormulario = this.formBuilder.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      dni: ['', Validators.required],
      nombre: ['', Validators.required],
      apePaterno: ['', Validators.required],
      apeMaterno: ['', Validators.required],
      sexo: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
    });
  }

  operate(): void {
    if (this.miFormulario.valid) {
      console.log('Formulario válido', this.miFormulario.value);
    } else {
      console.log('Formulario inválido');
      this.miFormulario.markAllAsTouched(); // Marca todos los campos como tocados
    }
  }
}
