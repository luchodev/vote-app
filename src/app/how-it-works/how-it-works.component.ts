import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css']
})
export class HowItWorksComponent implements OnInit {

  constructor() { }

  title = 'How It Works!';

  ngOnInit() {
    particlesJS.load('particles-js', 'assets/particles.json', null);
  }

}
