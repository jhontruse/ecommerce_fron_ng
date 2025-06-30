import { Persona } from '../Persona';
import { Rol } from '../Rol';
import { Usuario } from '../Usuario';

export class UsuarioDTO {
  usuario: Usuario;
  persona: Persona;
  rol: Rol[];
}
