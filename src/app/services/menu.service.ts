import { Inject, Injectable } from '@angular/core';
import { Menu } from '../model/menu';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Subject } from 'rxjs';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root',
})
export class MenuService extends GenericService<Menu> {
  private menuChange = new Subject<Menu[]>();

  constructor(http: HttpClient) {
    // http://localhost:7073/modulo
    super(http, `${environment.HOST}/modulo`);
  }

  getMenusByUser(username: string) {
 // http://localhost:7073/modulo/modulo/${username}
    return this.http.get<Menu[]>(`${this.url}/modulo/${username}`);
  }

  getMenuChange() {
    return this.menuChange.asObservable();
  }

  setMenuChange(menus: Menu[]) {
    this.menuChange.next(menus);
  }
}
