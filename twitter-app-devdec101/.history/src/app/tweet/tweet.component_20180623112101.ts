import { Component, Input, Output, EventEmitter OnInit  } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {


  @Input() tweet;

  constructor() { }

  ngOnInit() {
  }


  likeTweet(tweet){
    console.log(tweet);
  }

}
