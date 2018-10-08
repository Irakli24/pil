import { Component } from '@angular/core';
import {Reg} from './reg';
import {Router} from '@angular/router';
import {ServerService} from '../server.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  gender = ['---', 'M', 'F'];
  model = new Reg(  '', '', '' , '---');
  submitted = false;
  constructor(private route: Router, private serverService: ServerService) {}
  onSave() {
    this.serverService.register(this.model.email, this.model.password, this.model.username, this.model.gender)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
  // onGet() {
  //   this.serverService.register(this.model.email, this.model.password, this.model.username, this.model.gender)
  //     .subscribe(
  //       (response: Response) => {
  //         const data = response.json();
  //       },
  //       (error) => console.log(error)
  //     );
  // }
  onSubmit() { this.submitted = true; }

  newReg() {
    this.model = new Reg( '', '', '' , '');
  }
}
