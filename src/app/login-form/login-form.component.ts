import { Component, OnInit } from '@angular/core';
import {Log} from './log';
import {Router} from '@angular/router';
import {ServerService} from '../server.service';
import {Response} from '@angular/http';

@Component ({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  model = new Log(  '', '', );
  submitted = false;


  constructor(private route: Router, private serverService: ServerService) {}


  onLogin(email, password) {
    this.serverService.login(email, password)
      .subscribe(
        (response: Response) => {
          const data = response.json();
          console.log(data);
        },
        (error) => console.log(error)
      );
  }

  ngOnInit() {}
  // onSave() {
  //   this.serverService.login(this.model.email, this.model.password)
  //     .subscribe(
  //       (response) => console.log(response),
  //       (error) => console.log(error)
  //     );
  // }
  onSubmit() {
    this.submitted = true;
  }

  onLoadSignUp() {
    this.route.navigate(['../registration-form']);
  }
  newLog() {
    this.model = new Log( '', '');

  }

}

