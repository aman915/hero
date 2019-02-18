import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HttpClientModule }    from '@angular/common/http';
import { ItemsComponent } from './items/items.component';

import { AppRoutingModule } from './app-routing.module';
import { AddItemComponent } from './add-item/add-item.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    ItemsComponent,
    AddItemComponent
        ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
