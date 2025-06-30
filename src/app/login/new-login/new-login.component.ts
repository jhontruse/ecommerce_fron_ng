import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioDTO } from '../../model/dto/UsuarioDTO';
import { Rol } from '../../model/Rol';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../model/Usuario';

@Component({
  selector: 'app-new-login',
  imports: [ReactiveFormsModule],
  templateUrl: './new-login.component.html',
  styleUrl: './new-login.component.css',
})
export class NewLoginComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService
  ) {}

  miFormulario: FormGroup;
  usuarioDTO: UsuarioDTO = new UsuarioDTO();

  ngOnInit(): void {
    this.miFormulario = this.formBuilder.group({
      usuario: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      dni: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      apePaterno: new FormControl('', Validators.required),
      apeMaterno: new FormControl('', Validators.required),
      sexo: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
    });
  }

  operate(): void {
    const rol: Rol = new Rol();
    const usuario: Usuario = new Usuario();
    if (this.miFormulario.valid) {
      console.log('Formulario válido ' + this.miFormulario.value['usuario']);
      usuario.usuario = this.miFormulario.value['usuario'];
      //this.form.value['idPatient']
      this.usuarioDTO.usuario = usuario;
      /*usuarioDTO.usuario.password = this.miFormulario.value['password'];
      usuarioDTO.usuario.email = this.miFormulario.value['email'];
      usuarioDTO.usuario.activo = true;
      usuarioDTO.usuario.fecCreacion = new Date();

      usuarioDTO.persona.dni = this.miFormulario.value['dni'];
      usuarioDTO.persona.nombre = this.miFormulario.value['nombre'];
      usuarioDTO.persona.apePaterno = this.miFormulario.value['apePaterno'];
      usuarioDTO.persona.apeMaterno = this.miFormulario.value['apeMaterno'];
      usuarioDTO.persona.sexo = this.miFormulario.value['sexo'];
      usuarioDTO.persona.telefono = this.miFormulario.value['telefono'];
      usuarioDTO.persona.direccion = this.miFormulario.value['direccion'];
      usuarioDTO.persona.activo = true;*/

      //rol.idRol = 'a40913f4-3b7c-11f0-bc0e-5762e55600fc';
      //usuarioDTO.rol.push(rol); // Asignar un rol por defecto, por ejemplo, 1 para usuario normal

      //console.log('UsuarioDTO antes de enviar:', this.usuarioDTO);

      /*this.usuarioService.postUsuarioDTO(this.usuarioDTO).subscribe({
        next: (response) => {
          console.log('Usuario creado exitosamente', response);
          this.router.navigate(['/login']); // Redirigir al login después de crear el usuario
        },
        error: (error) => {
          console.error('Error al crear el usuario', error);
          // Manejar el error, por ejemplo, mostrar un mensaje al usuario
        },
      });*/

      //console.log('Formulario válido', this.miFormulario.value);
    } else {
      console.log('Formulario inválido');
      this.miFormulario.markAllAsTouched(); // Marca todos los campos como tocados
    }
  }
}
