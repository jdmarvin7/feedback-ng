import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceSendService } from 'src/app/services/service-send.service';

const KEY = 'token'

@Component({
  selector: 'app-feedbacks-card',
  templateUrl: './feedbacks-card.component.html',
  styleUrls: ['./feedbacks-card.component.scss']
})
export class FeedbacksCardComponent implements OnInit {

  users: any[] = [];

  constructor(private service: ServiceSendService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {

    this.service.getSends().subscribe((user) => {
        this.users = user;
        console.log(this.users);
      }
      );
  }

  pegarMensagens() {
    localStorage.getItem(KEY)
  }

}
