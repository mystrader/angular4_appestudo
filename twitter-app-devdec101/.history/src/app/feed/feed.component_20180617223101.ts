import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {


  tweets = [
    {
      user: "Stevie",
      name: "Stevie Feliciano",
      body: "Stevie Feliciano is a library scientist living in New York City. She likes to spend her time reading, running, and writing.",
      avatar: "../assets/images/avatar/stevie.jpg"
    },
     {
      user: "Stevie",
      name: "Stevie Feliciano",
      body: "Stevie Feliciano is a library scientist living in New York City. She likes to spend her time reading, running, and writing.",
      avatar: "../assets/images/avatar/stevie.jpg"
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
