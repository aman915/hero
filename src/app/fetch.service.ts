import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Item } from "./items";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FetchService {
  constructor(private http: HttpClient) {}

  itemObj: object = {};

  getItems(){
    return this.http.get('http://localhost:3600/itemsjson');
  }

  add(item, id) {
    this.itemObj = {
      id: id,
      title: item.title
    };
    
    this.http.post("http://localhost:/3600/addItem", this.itemObj);
  }}




  
  // getId(id){

  //  var breadcrumb = id.split(".");
  //  var task = _tasks;

  //  for(var idx = 1; idx < breadcrumb.length; idx++){

  //     task = task.tasks[breadcrumb[idx]];

  //   }

  //   return task;
  // }

