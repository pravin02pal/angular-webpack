import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  students: any;
  constructor(private router: Router, private af: AngularFire) {}

  ngOnInit() {
    const data = this.af.database.list('students');
    data.subscribe(
      val => this.students = val
    )
  }
}
