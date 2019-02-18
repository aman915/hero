import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Item } from "./items";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FetchService {
  private _url: string = "http://localhost:5555/products";

  constructor(private http: HttpClient) {}

  itemObj: object = {};

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this._url);
  }

  // getId(id){

  //  var breadcrumb = id.split(".");
  //  var task = _tasks;

  //  for(var idx = 1; idx < breadcrumb.length; idx++){

  //     task = task.tasks[breadcrumb[idx]];

  //   }

  //   return task;
  // }

  add(item, id) {
    this.itemObj = {
      id: id,
      title: item.title
    };
    this.http
      .post("http://localhost:5555/products", this.itemObj)
      .subscribe(data => console.log(data));
  }
}
