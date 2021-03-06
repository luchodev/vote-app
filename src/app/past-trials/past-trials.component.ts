import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;

@Component({
  selector: 'app-past-trials',
  templateUrl: './past-trials.component.html',
  styleUrls: ['./past-trials.component.css']
})
export class PastTrialsComponent implements OnInit {

  constructor() { }

  title = 'Past Trials!';
  ngOnInit() {
    particlesJS.load('particles-js', 'assets/particles.json', null);
  }

}
