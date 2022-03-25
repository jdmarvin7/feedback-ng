import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  user: any;

  constructor(private service: ApiServiceService, private router: Router) { }

  ngOnInit(): void {
    this.userLogged();
  }

  userLog() {
  }

  logOut() {
  }

  clicked() {
    if(confirm('Tem certeza que deseja sair?')){
      console.log('ok');
      this.service.logout();
      this.router.navigate(['login']);
    };
  }

  userLogged() {
    this.service.estaLogado();
    const token = JSON.parse(this.service.retornaToken());
    this.user = token;
    console.log(token);

  }
}
