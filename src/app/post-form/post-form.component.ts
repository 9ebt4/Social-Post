import { Component, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  newPost: Post = {} as Post;
  @Output() PostCreated = new EventEmitter<Post>();

  CreatePost(){
    let result:Post ={
      title: this.newPost.title,
      thought: this.newPost.thought,
      upvote: 0
    };
    this.PostCreated.emit(result);
  };
}
