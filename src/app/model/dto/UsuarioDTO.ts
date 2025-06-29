import { Persona } from '../Persona';
import { Rol } from '../Rol';
import { Usuario } from '../Usuario';

export class UsuarioDTO {
  usuario: Usuario | undefined;
  persona: Persona | undefined;
  rol: Rol[] | undefined;
}
