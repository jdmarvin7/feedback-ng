import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { ServiceSendService } from 'src/app/services/service-send.service';

@Component({
  selector: 'app-feedbacks-views',
  templateUrl: './feedbacks-views.component.html',
  styleUrls: ['./feedbacks-views.component.scss']
})
export class FeedbacksViewsComponent implements OnInit {

  envios!: any[];
  user!: any;

  constructor(private service: ApiServiceService ,private serviceSend: ServiceSendService, private router: Router) { }

  ngOnInit(): void {
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

  deletar() {
    if(confirm('Tem certeza que deseja deletar esta mensagem?')) {
      this.serviceSend.deleteMessage(this.envios[0]._id).subscribe((sends) => {
        console.log('deletado!');

      })
    }
  }

}
