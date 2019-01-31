import { Component, OnInit, Input } from '@angular/core';
import { HeroService } from '../hero.service';


@Component({
  selector: 'items',
  template: `
  <div *ngFor="let item of items">
  <ul>
    <li> 
      {{item.id}}
      {{item.title}}   
       <items [items]="item.items" *ngIf="item.items"></items>
    </li>
   </ul>
 </div>
  `,
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  
  @Input() items;

  constructor(private _heroService : HeroService) { }

  ngOnInit() {
    
  }

}
