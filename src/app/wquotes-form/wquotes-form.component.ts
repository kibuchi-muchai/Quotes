import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Wquotes } from '../wquotes';

@Component({
  selector: 'app-wquotes-form',
  templateUrl: './wquotes-form.component.html',
  styleUrls: ['./wquotes-form.component.css']
})
export class WquotesFormComponent implements OnInit {

  newWquotes = new Wquotes (0,"","","", "", new Date (), 0,0);
  @Output() add = new EventEmitter<Wquotes>();

  addQuote (){
    this.add.emit(this.newWquotes);
    this.newWquotes=new Wquotes (0,"","","", "", new Date (), 0,0);
  }

  constructor() {}

  ngOnInit() {
  }

}
