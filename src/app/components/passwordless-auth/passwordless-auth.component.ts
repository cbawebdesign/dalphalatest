import { Component, OnInit, NgZone} from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import * as firebase from 'firebase';
import { WindowService } from 'src/app/services/window.service';
import { environment } from 'src/environments/environment';
export class PhoneNumber {
  country: string;
  area: string;
  prefix: string;
  line: string;

  get e164() {
    const num = this.country + this.area + this.prefix + this.line;
    return `+${num}`
  }
}

@Component({
  selector: 'app-passwordless-auth',
  templateUrl: './passwordless-auth.component.html',
  styleUrls: ['./passwordless-auth.component.css'],
  providers: [WindowService]
})
export class PasswordlessAuthComponent implements OnInit {


 windowRef: any;
  phoneNumber = new PhoneNumber();
  verificationCode: string;
  user: any;
  constructor(
    private win: WindowService,
    public router: Router,  
    public ngZone: NgZone 

  ) { }

  ngOnInit() {
    this.windowRef = this.win.windowRef;
    const new_fire = firebase.initializeApp(environment.firebase)
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': function (response) {
        console.log(response);
      }
    });
    this.windowRef.recaptchaVerifier.render();
  }

  sendLoginCode() {
    debugger;
    var appVerifier = this.windowRef.recaptchaVerifier;
    const num = this.phoneNumber.e164;
    firebase.auth().signInWithPhoneNumber(num, appVerifier)
      .then(result => {
        this.windowRef.confirmationResult = result;
      })
      .catch(error => console.log(error));
  }

  verifyLoginCode() {
    debugger;
    this.windowRef.confirmationResult
      .confirm(this.verificationCode)
      this.ngZone.run(() => {
        this.router.navigate(['dashboard']);
      })

  }
}