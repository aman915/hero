import { Component, OnInit, Input } from '@angular/core';
import {Item} from '../items';
import { FetchService } from '../fetch.service';


  
@Component({
  selector: 'items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  public items = [];
  public itemShadow = [];
  container = [];
  head:string;
  sendId:number
  
  constructor(
    private _fetchService : FetchService){}
  
  ngOnInit() {
    this._fetchService.getItems().subscribe( (data : any) => {
      this.items.push(...data.products);
    })
  }

  selected(item){
   this.head = item.id+item.title;
   this.sendId = item.id;
   this.container = item.items;
   this.items = this.container;
 }

}