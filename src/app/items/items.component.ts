import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-items',
  template: `
   <h2>Items List</h2>
   <ul *ngFor= "let item of items">
     <li>{{item.id}}.{{item.name}}.{{item.age}}</li>
     </ul>  
  `,
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  
  public items = [];

  constructor(private _heroService : HeroService) { }

  ngOnInit() {
    this._heroService.getItems().subscribe(data => this.items = data); 
  }

}
