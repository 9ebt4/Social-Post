import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {
 @Input() DisplayPost:Post={} as Post;
 @Output() deleted = new EventEmitter<Post>();

 upvote():void{
  this.DisplayPost.upvote++;
 }
 deletePost():void{
  this.deleted.emit(this.DisplayPost);
 }
}
