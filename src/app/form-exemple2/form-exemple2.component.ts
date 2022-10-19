import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-exemple2',
  templateUrl: './form-exemple2.component.html',
  styleUrls: ['./form-exemple2.component.css']
})
export class FormExemple2Component implements OnInit {

  cityList: any[] = [

    {id: "1", name: "Dakar"},
    {id: "2", name: "Thies"},
    {id: "3", name: "Bambey"},
  ]

  contactForm = new FormGroup({

    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    genre: new FormControl(),
    isMarried: new FormControl(),
    city: new FormControl(),

  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

      console.log(this.contactForm.value);

  }

}
