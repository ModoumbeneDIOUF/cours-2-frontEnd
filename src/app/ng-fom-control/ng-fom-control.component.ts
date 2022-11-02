import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-ng-fom-control',
  templateUrl: './ng-fom-control.component.html',
  styleUrls: ['./ng-fom-control.component.css']
})
export class NgFomControlComponent implements OnInit {

  user = new User()
  emailError!: boolean
  passwordError!: boolean
  passwordConfirmationError!: boolean

  constructor(private auth_s : AuthService) { }

  ngOnInit(): void {
  }

  emailVerif(email:any){

      if((email.endsWith("@gmail.com"))  || (email.endsWith("@hotmail.com")) || email.endsWith("@yahoo.com")){

        this.emailError = false
      }
      else{
        this.emailError = true
      }
  }

  passwordLength(password: string)
{
  if(password.length < 6){
    this.passwordError = true
  }
  else if(password.length >= 6){

    setTimeout(
      ()=> {
        this.passwordError =  false
      }, 100
    )

  }

  if((this.user.passwordConfimation != undefined) && (this.user.passwordConfimation != password)){

    this.passwordConfirmationError = true
  }

}

passdWordConfirm(pass1: string, pass2:string){

  if(pass1 != pass2){

    this.passwordConfirmationError = true
  }
  else{

    this.passwordConfirmationError = false

  }
}

onSubmit(){

  this.auth_s.loginUser(this.user.email, this.user.password)
      .subscribe(response => {

        console.log(response)
      })
}



}

export class User{
  email!: string
  password!: string
  passwordConfimation!: string
}
