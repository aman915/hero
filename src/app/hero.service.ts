import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'  
})
export class HeroService {
  
  private _url: string = "/assets/data/items.json";

  constructor(private http: HttpClient ) { }

  getItems(){
    return this.http.get(this._url); 
  }
}
 