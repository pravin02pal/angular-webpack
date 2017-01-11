import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'my-app',
  templateUrl: '/app.component.html'
})
export class AppComponent implements OnInit {
  constructor(af: AngularFire) {
    af.database.list('students');
  }
  ngOnInit() {

  }
}