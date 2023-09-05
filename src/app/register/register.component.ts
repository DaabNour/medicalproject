import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  myregisterForm : FormGroup

  constructor(private fbreg:FormBuilder) {
    let regformControls ={
      firstNameu : new FormControl(),
      lastNameu : new FormControl(),
      emailu : new FormControl(),
      phoneu : new FormControl(),
      passwordu : new FormControl(),

    }
    this.myregisterForm=this.fbreg.group(regformControls)
  }
  ngOnInit(): void {
  }
  
  saveRegistration(){
    console.log(this.myregisterForm.value);

    //if (this.loginForm.invalid) return;

// alert('Calling backend to login');
  }

}
