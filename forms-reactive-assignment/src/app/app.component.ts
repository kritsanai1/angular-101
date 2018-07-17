import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectStatus = ['Stable', 'Critical', 'Finished'];
  signupForm: FormGroup;
  notAllowProjectNameList = ['Test'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required], this.forbiddenNameAsync),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('stable')
    });
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.notAllowProjectNameList.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenNameAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'Test') {
          resolve({'invalidName': true});
        } else {
          resolve(null);
        }
      },1500);
    });

    return promise;
  }
}
