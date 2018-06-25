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
      name: "Stevie Gray",
      body: "Stevie Gray is a library scientist living in New York City. She likes to spend her time reading, running, and writing.",
      likes: [],
      avatar: "../assets/images/avatar/stevie.jpg"
    },
     {
      user: "Jenny",
      name: "JennieDoe",
      body: "Jenny Doe is a library scientist living in New York City. She likes to spend her time reading, running, and writing.",
      likes: [],
      avatar: "../assets/images/avatar/jenny.jpg"
    },
     {
      user: "Veronika",
      name: "Veronika",
      body: "Veronika is a library scientist living in New York City. She likes to spend her time reading, running, and writing.",
      likes: ['jenny', 'stevie'],
      avatar: "../assets/images/avatar/veronika.jpg"
    }
  ];


  likedTweet = undefined;
  currentUser = 'stevie';



  constructor() { }

  ngOnInit() {
  }

  handleLikedTweetFromChildComponent(tweet){
    var index = this.tweets.findIndex(currTweet => {
        return currTweet.user == tweet.user;
    });
    console.log(index);
  }
}
