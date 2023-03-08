import { Component, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent {
  Posts:Post[]=[
    {
      title:"Test",
      thought:"This post functions and exists",
      upvote:0
    },
    {
      title:"Info",
      thought:"Did you know you can like, delete and add posts?",
      upvote:0
    },
  ];
  AddPost(newPost:Post){
    this.Posts.push(newPost);
    this.runProgram=false;
  };
  runProgram:boolean=false;
  OnDelete(p:Post):void{
    let index:number = this.Posts.findIndex(post=>post == p);
    this.Posts.splice(index,1);
  }
}
