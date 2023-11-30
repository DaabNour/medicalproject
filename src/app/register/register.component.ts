import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  myregisterForm : FormGroup

  constructor(private fbreg:FormBuilder,private userService:UserService) {
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
    let user=this.myregisterForm.value;
    this.userService.addUser(user).subscribe(
      result=>{
        console.log(result);
        alert("User added successfully");
      },
      error=>{
        console.log(error);
      }
    )
  }

}
