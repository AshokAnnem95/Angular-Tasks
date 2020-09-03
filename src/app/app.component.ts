import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyApplication';
  LinkToNavigate = 'user';
  onClick(link){
    this.LinkToNavigate = link;

  }
}
