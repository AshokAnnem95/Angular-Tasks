import { Component, OnInit,ViewChild, ElementRef  } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { Shopping } from '../Shopping';

declare var paypal;

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  ListOfItems : Shopping[] = [];
  ngOnInit(){
    
  }
  AddItem(event){
    this.ListOfItems.push(event)

  }
  // @ViewChild('paypal', { static: true }) paypalElement: ElementRef;

  // product = {
  //   price: 20,
  //   description: 'used couch, decent condition',
  //   // img: 'assets/couch.jpg'
  // };

  // paidFor = false;

  // constructor() { }
  //  ngOnInit() {
  //   paypal
  //     .Buttons({
  //       createOrder: (data, actions) => {
  //         return actions.order.create({
  //           purchase_units: [
  //             {
  //               description: this.product.description,
  //               amount: {
  //                 currency_code: 'INR',
  //                 value: this.product.price
  //               }
  //             }
  //           ]
  //         });
  //       },
  //       onApprove: async (data, actions) => {
  //         const order = await actions.order.capture();
  //         this.paidFor = true;
  //         console.log(order);
  //       },
  //       onError: err => {
  //         console.log(err);
  //       }
  //     })
  //     .render(this.paypalElement.nativeElement);
  // }
  

}
