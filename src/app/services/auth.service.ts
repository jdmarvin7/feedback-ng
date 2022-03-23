
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable, tap } from 'rxjs';
import { UserService } from './user.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlBase = 'http://localhost:3000/users';


  constructor(
    private httpClient: HttpClient,
    private user: UserService) { }

  autenticar(username: string, password: string): Observable<HttpResponse<any>> {
    return this.httpClient.post(`${this.urlBase}/login`, {
      username: username,
      password: password,
    },
    { observe: 'response' }
    ).pipe(
      tap((res) => {
        const authToken = res.headers.get('x-acess-token') ?? '';
        this.user.salvarToken(authToken)
      })
    )
  }
}
