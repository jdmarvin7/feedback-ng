import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: any;

  constructor(private service: ApiServiceService) { }

  ngOnInit(): void {
    this.userLogged();
  }

  userLogged() {
    this.service.estaLogado();
    const token = JSON.parse(this.service.retornaToken());
    this.user = token;
    console.log(token);

  }

}
