import { Component, OnInit, Input } from '@angular/core';
import {Item} from '../items';
import { FetchService } from '../fetch.service';


  
@Component({
  selector: 'items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  public items:Item[] = [];
  container = [];
  head:string;
  sendId:number
  
  constructor(
    private _fetchService : FetchService){
    this._fetchService.getItems().subscribe(data => this.items = data)
   }
  
  ngOnInit() {}

  selected(item){
   this.head = item.id+item.title;
   this.sendId = this.items.length;
   this.container = item.items;
   this.items = this.container;
 }

}