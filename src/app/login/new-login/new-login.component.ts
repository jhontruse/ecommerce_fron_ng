import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioDTO } from '../../model/dto/UsuarioDTO';
import { Rol } from '../../model/Rol';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../model/Usuario';
import { Persona } from '../../model/Persona';
import { formatDate, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { LOCALE_ID } from '@angular/core';
registerLocaleData(localeEs, 'es-ES');

@Component({
  selector: 'app-new-login',
  imports: [ReactiveFormsModule],
  templateUrl: './new-login.component.html',
  styleUrl: './new-login.component.css',
  providers: [{ provide: LOCALE_ID, useValue: 'es-ES' }],
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
    const persona: Persona = new Persona();
    const currentDate = new Date();
    const formattedDate = formatDate(
      currentDate,
      'yyyy-MM-dd HH:mm:ss',
      'es-ES'
    );
    if (this.miFormulario.valid) {
      console.log('Formulario válido ' + this.miFormulario.value['usuario']);

      usuario.usuario = this.miFormulario.value['usuario'];
      usuario.password = this.miFormulario.value['password'];
      usuario.email = this.miFormulario.value['email'];
      usuario.activo = true;
      usuario.fecCreacion = formattedDate; // Formatear la fecha a 'yyyy-MM-dd HH:mm:ss'

      persona.dni = this.miFormulario.value['dni'];
      persona.nombre = this.miFormulario.value['nombre'];
      persona.apePaterno = this.miFormulario.value['apePaterno'];
      persona.apeMaterno = this.miFormulario.value['apeMaterno'];
      persona.sexo = this.miFormulario.value['sexo'];
      persona.telefono = this.miFormulario.value['telefono'];
      persona.direccion = this.miFormulario.value['direccion'];
      persona.activo = true;

      rol.idRol = 'a40913f4-3b7c-11f0-bc0e-5762e55600fc';

      this.usuarioDTO.usuario = usuario;
      this.usuarioDTO.persona = persona;
      this.usuarioDTO.rol = [rol];

      console.log('UsuarioDTO antes de enviar:', this.usuarioDTO);

      this.usuarioService.postUsuarioDTO(this.usuarioDTO).subscribe({
        next: (response) => {
          console.log('Usuario creado exitosamente', response);
          this.router.navigate(['/login']); // Redirigir al login después de crear el usuario
        },
        error: (error) => {
          console.error('Error al crear el usuario', error);
        },
      });
    } else {
      console.log('Formulario inválido');
      this.miFormulario.markAllAsTouched(); // Marca todos los campos como tocados
    }
  }
}
