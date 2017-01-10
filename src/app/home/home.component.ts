import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  students: any;
  constructor(private router: Router) {}

  ngOnInit() {
    this.students = [
	  {
	    "name": "Madrid",
	    "email": "madrid@yopmail.com",
	    "dob": "01/02/2016",
	    "city": "indore"
	  },
	  {
	    "name": "Hari",
	    "email": "hari@yopmail.com",
	    "dob": "11/05/2016",
	    "city": "pithampur"
	  },
	  {
	    "name": "Jhon",
	    "email": "jhon@yopmail.com",
	    "dob": "25/27/2016",
	    "city": "dhar"
	  }  
	]
  }
}
