import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiServiceService } from '../services/api-service.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service'

const KEY = 'token'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  username!: string;
  email!: string;
  password!: string;

  constructor(private http: HttpClient, private service: ApiServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.service.fazerLogin(this.username, this.password).subscribe(
      (user: any) => {
        this.router.navigate(['home'])
        this.service.salvarToken(JSON.stringify(user))
      })
    }

    loginUser() {
      this.service.autenticar(this.username, this.password).subscribe((user) => {
        this.router.navigate(['home'])
    })
  }


}


