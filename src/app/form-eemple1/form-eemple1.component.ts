import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-eemple1',
  templateUrl: './form-eemple1.component.html',
  styleUrls: ['./form-eemple1.component.css']
})
export class FormEemple1Component implements OnInit {

  listCity: any[] = [

    {id: "1", name: "Dakar"},
    {id: "2", name: "Thies"},
    {id: "3", name: "Bambey"},

  ]
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(userForm:any){

    console.log(userForm.value);

  }

}
