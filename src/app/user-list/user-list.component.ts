import { Component, OnInit, ViewChild, TemplateRef, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';

import { User } from '../user';
import * as moment from 'moment';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  user = new User(0, "", "", "","");
  users: User[] = [{ id: 1, Name: "John", Address: "Hyd", Designation: "Developer",CreatedOn :"2020-08-25" },
  { id: 2, Name: "Alex", Address: "Hyd", Designation: "QA" ,CreatedOn :"2020-08-15"},
  { id: 3, Name: "Test", Address: "pune", Designation: "BA" ,CreatedOn :"2020-09-15"},
  { id: 4, Name: "Sample", Address: "Hyd", Designation: "BA" ,CreatedOn :"2020-09-15"},
  { id: 1, Name: "John", Address: "Hyd", Designation: "Developer",CreatedOn :"2020-08-25" },
  { id: 2, Name: "Alex", Address: "Hyd", Designation: "QA" ,CreatedOn :"2020-08-15"},
  { id: 3, Name: "Test", Address: "pune", Designation: "BA" ,CreatedOn :"2020-09-15"},
  { id: 4, Name: "Sample", Address: "Hyd", Designation: "BA" ,CreatedOn :"2020-09-15"},

  { id: 4, Name: "Sample5", Address: "Hyd", Designation: "BA" ,CreatedOn :"2020-09-15"},
  { id: 4, Name: "Sample6", Address: "Hyd", Designation: "BA" ,CreatedOn :"2020-09-15"},

  { id: 5, Name: "new Feature", Address: "Hyd", Designation: "BA" ,CreatedOn :"2020-09-15"}];

  isFromEditMode: boolean = false;
  ButtonName: string;
  indexPosition: number;
  userPopupHeader: string;
  UserChecked: boolean;
  showButton: boolean;
  isChecked: boolean;
  selectedUser: any;
  fromDate : string;
  toDate : string;
  event : any;
  listButtonShow : boolean;
  gridButtonShow : boolean;
  cardEdit : boolean;
  searchByUser : string;
  searchByDesignation : string;
  dataFromChild : any;
  p: number = 1;
  constructor( private datepipe :DatePipe) { }
  ngOnInit(): void {
    $(".modal").modal("hide");
    this.showButton = false;
    this.isChecked = false;
    document.getElementById("Grid").style.display = "none";
    this.listButtonShow = false;
    this.gridButtonShow = true;
  }

  AddUser() {
    if(this.event != undefined && this.event.target!=undefined &&
      this.event.target.checked!=undefined &&
       this.event.target.checked == true){
      this.event.target.checked = false;
    }
    // if(this.event == undefined){
    //   this.event.target.checked = false;
    // }
    this.isChecked = false;

    this.ButtonName = "Save";
    this.userPopupHeader = "Add User";
    $(".modal").modal("show");
    this.user = new User(0,"","","","");
  }

  onSave() {
    if (this.isFromEditMode == true) {
      if(this.cardEdit != true){
        this.event = {};
        this.event.target = {};
        this.event.target.checked = false;
      }
      this.users[this.indexPosition] = this.selectedUser;
      this.isFromEditMode = false;

      this.isChecked = false;
      this.user = new User(0, "", "", "","");

    }
    else {
      if(this.cardEdit != true){
        this.event = {};
        this.event.target = {};
        // this.event.target.checked = false;
        this.event.target.checked = false;
      }
      this.users.push(this.user);
      this.user = new User(0, "", "", "","");
      this.isChecked = false;
    }
    this.users = this.users;
    $(".modal").modal("hide");
  }


  ClosePopup() {
    $(".modal").modal("hide");
  }
  DeleteUser() {
    this.users.splice(this.indexPosition, 1);

    this.showButton = false;
    this.isChecked = false;
    this.selectedUser = new User(0,"","","","");

  }
  OnChangeUser(user: User, event, index) {
    if (event.target.checked == true) {
      this.event = event;
      this.isChecked = event.target.checked;
      // this.showButton = true;
      this.selectedUser = user;
      this.indexPosition = index;

    }
  }

  onEdit() {
    $(".modal").modal("show");
    this.isFromEditMode = true;
    this.ButtonName = "Update";
    this.userPopupHeader = "Edit User";
    this.user = this.selectedUser;
    // if(this.event == undefined && this.event.target==undefined &&
    //   this.event.target.checked==undefined )
    //    {
    //   this.event.target.checked = false;
    //    }

  }
  onSubmit() {
    console.log(this.fromDate +" "+this.toDate );
    this.fromDate =this.datepipe.transform(this.fromDate, 'yyyy-MM-dd');
    this.toDate = this.datepipe.transform(this.toDate, 'yyyy-MM-dd');

    this.users =  this.users.filter(user => user.CreatedOn > this.fromDate && user.CreatedOn< this.toDate)
    this.fromDate = "";
    this.toDate = ""
    console.log(this.users)
  }
  listView() {
    this.listButtonShow = false;
    this.gridButtonShow = true;
    document.getElementById("Grid").style.display = "none";
    document.getElementById("table").style.display = "block"
  }
  Gridview() {
    this.gridButtonShow = false;
    this.listButtonShow = true;
    document.getElementById("table").style.display = "none";
    document.getElementById("Grid").style.display = "block";
  }
  // onCardClick(user,i){
  //   this.cardEdit = true;
  //   this.isChecked = true;
  //   this.selectedUser = user;
  //   this.indexPosition = i;
  //   console.log(user);
  // }
  checkIfCardIsClicked(cardIndex: number) : boolean {

    return cardIndex=== this.indexPosition;
  }
  HandleUser(event : User,index) {
     this.selectedUser = event;
     this.indexPosition = index;
     this.isChecked = true;
     console.log(event)
  }


}
