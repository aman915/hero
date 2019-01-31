import { Component } from '@angular/core';
import { HeroService } from './hero.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of heroes';
   items;

  constructor(private _heroService : HeroService){
   this._heroService.getItems().subscribe(data =>{this.items = data});
  }
}
