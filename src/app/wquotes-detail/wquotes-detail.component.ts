import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Wquotes } from '../wquotes';



@Component({
  selector: 'app-wquotes-detail',
  templateUrl: './wquotes-detail.component.html',
  styleUrls: ['./wquotes-detail.component.css']
})
export class WquotesDetailComponent implements OnInit {

  @Input() quote: Wquotes;

  @Output()isRead = new EventEmitter<boolean>();
  
  quoteRead(read:boolean){
    this.isRead.emit(read);
  }
  constructor() { }

  ngOnInit(){
  }

}
