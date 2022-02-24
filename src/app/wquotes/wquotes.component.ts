import { Component, OnInit } from '@angular/core';
import {Wquotes} from '../wquotes';



@Component({
  selector: 'app-wquotes',
  templateUrl: './wquotes.component.html',
  styleUrls: ['./wquotes.component.css']
})

export class WquotesComponent implements OnInit {

  title = 'Words of Wisdom'

  quotes:Wquotes[] = [
    new Wquotes(1, 'Kibuchi', 'Books', 'So many books, so little time.', ' Frank Zappa ', new Date (2022, 1, 1), 0, 0),
    new Wquotes(2, 'Dickson', 'Inner-change', 'Be yourself; everyone else is already taken.',  'Oscar Wilde ', new Date (2022, 1, 2), 0,0),
    new Wquotes(3, 'Muchai', 'Inspirational', 'Be the change that you wish to see in the world.', 'Mahatma Gandhi ', new Date (2022, 1, 3), 0,0)

  ];

  quoteRead(isRead, index){
    if (isRead){
      let toRead= confirm('Are you certain you are done reading this amazing quote?')
      if(toRead){
        this.quotes.splice(index,1);
      }
    }
  }

  get wQuotes(){
    return this.quotes.sort((a,b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }
  

  seeMore(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }

  addedNewWquotes(quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.datePosted = new Date(quote.datePosted)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}
