import { Component } from '@angular/core';
import { RegistrationService } from './registration.service';
import { Router } from '@angular/router';
import { Student } from './student';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  templateUrl: './registration.component.html'
})

export class RegistrationComponent {
  student: any;
  constructor(private registrationService: RegistrationService, private router: Router, private af: AngularFire) {
    this.student = new Student();
  }

  submitRegistration() {
    this.af.database.list('students').push(this.student)
  }
}
