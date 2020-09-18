import { Component, OnInit } from '@angular/core';
import {URLSearchParams} from '@angular/http';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  // private email;
  // private subject;
  // private comments;
  // private name;

  constructor() { }

  ngOnInit() {
  }
  async onSubmit(f) {
    console.log('form submitted is ', f, f.value /*, this.email, this.subject, this.comments, this.name*/)
    // const result = await fetchPostUrlEncoded('https://formspree.io/johnsimerlink@gmail.com', f.value)
    post('https://formspree.io/andy@dalphafund.com', f.value)
    // console.log('result is ', result);
    // fetch('https://google.com')
  }

}
function post(path, params, method = 'post') {

  // The rest of this code assumes you are not using a library.
  // It can be made less wordy if you use one.
  const form = document.createElement('form');
  form.method = method;
  form.action = path;

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const hiddenField = document.createElement('input');
      hiddenField.type = 'hidden';
      hiddenField.name = key;
      hiddenField.value = params[key];

      form.appendChild(hiddenField);
    }
  }

  document.body.appendChild(form);
  form.submit();
}
