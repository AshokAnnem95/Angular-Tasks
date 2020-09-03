import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
// import { UsersComponent } from './users/users.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HeaderComponent } from './header/header.component';
import * as bootstrap from "bootstrap";
import * as $ from "jquery";
import * as moment from 'moment';
import { DatePipe } from '@angular/common';
import { NgxPayPalModule } from 'ngx-paypal';
import { BetterHighlighterDirective } from './better-highlighter.directive';
import { FilterPipe } from './filter.pipe';


import { UserListComponent } from './user-list/user-list.component';

import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { DisplayUserComponent } from './display-user/display-user.component';
import {NgxPaginationModule} from 'ngx-pagination'; 

@NgModule({
  declarations: [
    AppComponent,
    // UsersComponent,
    HeaderComponent,
    BetterHighlighterDirective,
    FilterPipe,
    UserListComponent,
    ShoppinglistComponent,
     ShoppingItemComponent,
     DisplayUserComponent,
     
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgxPayPalModule,
    NgxPaginationModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
