import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiServiceService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceSendService {
  urlBase = 'http://localhost:3000/sends';

  constructor(private http: HttpClient, private service: ApiServiceService) { }

  getSends(): Observable<any> {
    return this.http.get(this.urlBase);
  }

  sendMessage(username: string, pontoMelhorar: string,
    pontoManter: string, sugestoes: string, feedback: string): Observable<any> {
    return this.http.post(`${this.urlBase}/enviar`, {
      username: username,
      pontoMelhorar: pontoMelhorar,
      pontoManter: pontoManter,
      sugestoes: sugestoes,
      feedbackFinal: feedback
    });
  }

  updateMessage(id: string): Observable<any> {
    return this.http.post(`${this.urlBase}/:id`, {
      id: id,
    });
  }
}
