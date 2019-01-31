import { Component } from '@angular/core';
import comments from '../assets/data/comment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of heroeeee';
  comments;

  constructor(){
    this.comments = comments;
  }
}
