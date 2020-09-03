import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {
  @Input()   selectedUser : User;
  @Output()  Notify = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }

  onUserClick() {
    // this.Notify.emit(this.selectedUser);
    this.Notify.emit();

  }

}
