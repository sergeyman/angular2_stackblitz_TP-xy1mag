import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Sergei';
  appTitle:  string = 'Welcome ';
  appStatus: boolean = true;

  appList: any[] = [{
    "ID": "1",
    "name": "one"
  },
  {
    "ID": 2,
    "name": "two"
  },
  {
    "ID": "3",
    "name": 3
  } ]
}
