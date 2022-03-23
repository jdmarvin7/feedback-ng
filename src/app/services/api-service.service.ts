import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from "./User";
import jwt_decode from "jwt-decode";

const KEY = 'token'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  urlBase = 'http://localhost:3000/users';
  private usuarioSubject: any;


  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.urlBase);
  }

  createUser(username: string, email: string, password: string): Observable<any>{
    return this.http.post(`${this.urlBase}/signup`, {
      username: username,
      email: email,
      password: password
    });
  }

  autenticar(username: string, password: string): Observable<HttpResponse<any>> {
    return this.http.post(`${this.urlBase}/login`, {
      username: username,
      password: password,
    },
    { observe: 'response' }
    ).pipe(
      tap((res) => {
        const authToken = res.headers.get('x-acess-token') ?? '';
        this.salvarToken(authToken)
      })
    )
  }

  fazerLogin(username: string, password: string) {
    return this.http.post(`${this.urlBase}/login`, {
      username: username,
      password: password
    });
  }

  retornaToken() {
    return localStorage.getItem(KEY) ?? '';
  }

  salvaToken(token: string) {
    localStorage.setItem(KEY, token)
  }

  excluirToken() {
    localStorage.removeItem(KEY)
  }

  possuiToken() {
    return !!this.retornaToken;
  }

  private decodificadorJWT() {
    const token = this.retornaToken();
    const usuario = jwt_decode(token);
    return usuario;
  }

  retornaUsuario() {
    return this.usuarioSubject;
  }

  salvarToken(token: string) {
    this.salvaToken(token);
    this.decodificadorJWT();
  }

  logout() {
    this.excluirToken();
    this.usuarioSubject.next({})
  }

  estaLogado() {
    return this.possuiToken();
  }

}
