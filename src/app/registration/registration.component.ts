import { Component } from '@angular/core';
import { RegistrationService } from './registration.service';
import { Router } from '@angular/router';
import { Student }    from './student';

@Component({
  templateUrl: './registration.component.html'
})

export class RegistrationComponent {
  student: any = Student;
  constructor(private registrationService: RegistrationService, private router: Router) {
    this.student = new Student();
  }

  submitRegistration() {
  }
}
