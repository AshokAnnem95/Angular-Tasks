import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {Shopping} from '../Shopping'

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {
  shopping  : Shopping = new Shopping();
  @Input() selectedItem : Shopping;
  @Output() onItemAdded = new EventEmitter<Shopping>();

  constructor() { 

  }

  ngOnInit(): void {
  }
  addItem(){
     this.onItemAdded.emit(this.shopping);
    //  this.ClearData();
     
  }
  ClearData() {
    this.shopping.GadgetName = "";
    this.shopping.GadgetPrice = 0;
  }
  EditItem() {
    this.shopping.GadgetName = this.selectedItem.GadgetName;
    this.shopping.GadgetPrice = this.selectedItem.GadgetPrice;
  }

}
