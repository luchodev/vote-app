import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {
  Math: any;
  peopleData: any[];

  constructor() {
    this.Math = Math;
  }

  ngOnInit() {
    let browserAppData = localStorage.getItem('voteAppData');
    if (browserAppData) {
      this.peopleData = JSON.parse(browserAppData);
    } else {
      this.peopleData = [{
        name: 'Kanye West',
        src: '../../assets/images/people/kanye.png',
        datePicture: '1 month ago ',
        placePicture: 'in Entertainment',
        descriptionPicture: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero',
        rateThumbUp: 19,
        rateThumbDown: 19
      }, {
        name: 'Mark Zuckerberg',
        src: '../../assets/images/people/mark.png',
        datePicture: '1 month ago ',
        placePicture: 'in Business',
        descriptionPicture: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero',
        rateThumbUp: 0,
        rateThumbDown: 69
      }];
    }
  }

  onThumbUpClick(person: any): void {
    person.thumbDown = false;
    person.thumbUp = true;
  }

  onThumbDownClick(person: any): void {
    person.thumbUp = false;
    person.thumbDown = true;
  }

  onVoteClick(person: any): void {
    if (person.thumbUp) {
      person.rateThumbUp++;
      person.showSuccesVote = true;
    } else if (person.thumbDown) {
      person.rateThumbDown++;
      person.showSuccesVote = true;
    }
    this.saveDataInBrowser();
  }

  onVoteAgain(person: any): void {
    person.showSuccesVote = false;
  }

  saveDataInBrowser(): void {
    localStorage.setItem('voteAppData', JSON.stringify(this.peopleData));
  }

}