import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  myloginForm : FormGroup

  constructor(private fblog:FormBuilder) {
    let logformControls ={
      email : new FormControl(),
      password : new FormControl(),
    }
    this.myloginForm=this.fblog.group(logformControls)
  }
  ngOnInit(): void {
  }
  
  saveLogin(){
    console.log(this.myloginForm.value);

    //if (this.loginForm.invalid) return;

// alert('Calling backend to login');
  }

   }
    
  
