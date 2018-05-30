import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  @Input() title: string;
 @Input() content: string;
  @Input() loveIts: number;
  @Input()created_at: Date;
  constructor() { }
   getTitle():string{
   return this.title;
   }
    getContent():string{
   return this.content;
   }
    getLoveIts():number{
   return this.loveIts;
   }

    getCreateDate():Date{
   return this.created_at;
   }
  ngOnInit() {
  this.created_at=new Date(); 
  }

  onIncremente(){
  this.loveIts++;
  }

  onDecrimente(){
  this.loveIts--;
  }

}
