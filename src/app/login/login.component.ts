import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  title = 'Login / Sign up!';
  ngOnInit() {
    particlesJS.load('particles-js', 'assets/particles.json', null);
  }

}
