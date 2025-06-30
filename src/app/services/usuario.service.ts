import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Subject } from 'rxjs';
import { UsuarioDTO } from '../model/dto/UsuarioDTO';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService extends GenericService<UsuarioDTO> {
  private menuChange = new Subject<UsuarioDTO[]>();

  constructor(http: HttpClient) {
    // http://localhost:7073/usuario
    super(http, `${environment.HOST}/usuario`);
  }

  postUsuarioDTO(usuario: UsuarioDTO) {
   // http://localhost:7073/usuario/create
      return this.http.post<UsuarioDTO>(`${this.url}/create`, usuario);
    }
}
