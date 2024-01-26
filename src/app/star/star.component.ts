import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})

export class StarComponent implements OnInit,OnChanges{

 @Input() rating = 4.5;
 @Output() ratingChange = new EventEmitter<number>();

 starWidth = 0;

  ratings = Array.from(Array(5).keys());

  constructor(){
    //this.starWidth = this.rating * 16;
  }
  ngOnChanges(): void {
    console.log("In ng Changes", this.rating);
    this.starWidth = this.rating * 16;
  }
  ngOnInit(): void {
    //console.log("in oninit ", this.rating);
    //this.starWidth = this.rating * 16;
  }

  changeRating(rating:number):void{
    //this.starWidth = rating * 16;
    this.ratingChange.emit(rating);
  }

}
