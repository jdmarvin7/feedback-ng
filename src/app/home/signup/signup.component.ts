import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user!: string;
  email!: string;
  password!: string;

  constructor(private service: ApiServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  cadastrar(): void {
    this.service.createUser(this.user, this.email, this.password).subscribe(
      () =>{
        this.router.navigate(['/'])
      }
    )
  }

}
