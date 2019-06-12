import { Component, OnInit, Input } from '@angular/core';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
 @Input() postName : string;
 @Input() like : number;
like = 0;
 
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000
    );
  });
  constructor() { }

    ngOnInit() {
    }
   addLike(){
     this.like++;
     return this.like;
   }
   removeLike(){
    this.like--;
    return this.like;
  }
  getColor(){
    if(this.like > 0){
      return 'lightGreen';

    } else if (this.like < 0){
      return 'pink';
    }
  }
  }

