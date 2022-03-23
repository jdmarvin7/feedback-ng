import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceSendService {
  urlBase = 'http://localhost:3000/sends';

  constructor(private http: HttpClient) { }

  getSends(): Observable<any> {
    return this.http.get(this.urlBase);
  }

  sendMessage(username: string, sendUsername: string, pontoManter: string,
     pontoMelhorar: string, sugestoes: string, feedbackFinal: string): Observable<any> {
    return this.http.post(`${this.urlBase}/enviar`, {
      username: username,
      sendUsername: sendUsername,
      pontoMelhorar: pontoMelhorar,
      pontoManter: pontoManter,
      sugestoes: sugestoes,
      feedbackFinal: feedbackFinal
    });
  }

  updateMessage(id: string): Observable<any> {
    return this.http.post(`${this.urlBase}/:id`, {
      id: id,
    });
  }
}
