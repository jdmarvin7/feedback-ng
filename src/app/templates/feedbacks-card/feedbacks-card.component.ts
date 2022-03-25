import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { ServiceSendService } from 'src/app/services/service-send.service';

const KEY = 'token'

@Component({
  selector: 'app-feedbacks-card',
  templateUrl: './feedbacks-card.component.html',
  styleUrls: ['./feedbacks-card.component.scss']
})
export class FeedbacksCardComponent implements OnInit {

  envios: any[] = [];

  user: any;

  constructor(private serviceSend: ServiceSendService, private service: ApiServiceService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    /*
    this.service.getSends().subscribe((user) => {
        this.users = user;
        console.log(this.users);
      }
      );*/
    this.userLogged();
    this.sends();

  }

  userLogged() {
    this.service.estaLogado();
    const token = JSON.parse(this.service.retornaToken());
    this.user = token;
  }

  sends() {
    this.serviceSend.getSends(this.user.token).subscribe((sends) => {
      this.envios = sends;
    console.log(this.envios);
    })
  }

  clicked() {
    this.router.navigate(['dashboard/views'])
  }



}
