import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FetchService } from '../fetch.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  itemData: string;

  constructor(private http:HttpClient,
    private fetch:FetchService,private route: ActivatedRoute) { }
  newItem:Object = {}
  public id: string;

  addNewProduct(item){
   this.newItem = {
     "title":item
    }
    
    this.fetch.add(this.newItem, this.id)
    
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
