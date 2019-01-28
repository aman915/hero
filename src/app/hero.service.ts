import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './items';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  private _url: string = "/assets/data/items.json";

  constructor(private http: HttpClient ) { }

  getItems(): Observable<Item[]>{
    return this.http.get<Item[]>(this._url); 
  }
}
