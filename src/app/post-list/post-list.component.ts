import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  title = 'Posts';
  
  postOne='Mon premier post';
  postTwo='Mon deuxieme post';
  postThree='Encore un post';
  
  constructor() { }

  ngOnInit() {
  }

}
