import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') form: NgForm;

  submitted = false;

  userForm: {
    email: '',
    subscription: '',
    password: ''
  };

  onSubmit() {
    this.userForm = {
      email: this.form.value['email'],
      subscription: this.form.value['subscription'],
      password: this.form.value['password']
    };

    this.submitted = true;

  }
}
