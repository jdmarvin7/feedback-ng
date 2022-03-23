
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlBase = 'http://localhost:3000/users';

  private usuarioSubject = new BehaviorSubject<any>({});


  constructor(private tokenService: TokenService) {
    if (this.tokenService.possuiToken()) {
      this.decodificadorJWT();
    }
  }

  private decodificadorJWT() {
    const token = this.tokenService.retornaToken();
    const usuario = jwt_decode(token);
    this.usuarioSubject.next(usuario)
  }

  retornaUsuario() {
    return this.usuarioSubject.asObservable();
  }

  salvarToken(token: string) {
    this.tokenService.salvaToken(token);
    this.decodificadorJWT();
  }

  logout() {
    this.tokenService.excluirToken();
    this.usuarioSubject.next({})
  }

  estaLogado() {
    return this.tokenService.possuiToken();
  }
}
