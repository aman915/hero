import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'comments',
  template: `
  
   <div *ngFor="let comment of comments">
     <ul>
       <li> 
         {{comment.id}}
         {{comment.title}}   
          <comments [comments]="comment.items" *ngIf="comment.items"></comments>
       </li>
      </ul>
    </div>
    `,
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

 @Input() comments;

  constructor() { }

  ngOnInit() {
  }

}
