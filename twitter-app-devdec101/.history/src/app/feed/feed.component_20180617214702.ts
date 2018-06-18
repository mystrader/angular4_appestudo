import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {


  tweets = [
    {
      user: "",
      name: "",
      body: "",
      avatar: ""
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
