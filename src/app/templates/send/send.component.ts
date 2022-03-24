import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { ServiceSendService } from 'src/app/services/service-send.service';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss']
})
export class SendComponent implements OnInit {

  username!: string
  pontoMelhorar!: string
  pontoManter!: string
  sugestoes!: string
  feedbackFinal!: string
  sendUsername!: string


  constructor(private service: ApiServiceService, private service2: ServiceSendService, private router: Router) { }

  user: any;


  ngOnInit(): void {
    this.userLogged();
    const sendUsername = this.user.token;
    this.sendUsername = sendUsername;
  }

  sendMessages() {
    this.service.sendMessage(`http://localhost:3000/sends/enviar?token=${this.sendUsername}`,this.username, this.pontoMelhorar,
      this.pontoManter, this.sugestoes, this.feedbackFinal).subscribe(
        () => {
          this.router.navigate(['home']);
        }
        );
      }

      userLogged() {
        this.service.estaLogado();
        const token = JSON.parse(this.service.retornaToken());
        this.user = token;
        console.log(token);
      }
}
