import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceSendService } from 'src/app/services/service-send.service';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss']
})
export class SendComponent implements OnInit {

  constructor(private service: ServiceSendService, private router: Router) { }

  ngOnInit(): void {
  }

}
