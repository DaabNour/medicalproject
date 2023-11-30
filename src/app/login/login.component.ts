import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  myloginForm : FormGroup
  users: any


  constructor(private fblog:FormBuilder,private userService:UserService,private router:Router) {

    let logformControls ={
      emailu : new FormControl(),
      passwordu : new FormControl(),
    }
    this.myloginForm=this.fblog.group(logformControls)
  }






  ngOnInit(): void {
    this.getusers();
  }

  getusers(){

    this.userService.getAllUsers().subscribe(
      result=>{
        console.log(result);
        this.users=result;
        console.log(this.users);

      },
      error=>{
        console.log(error);
      }
    )
  }
  login() {
    let data=this.myloginForm.value;
    console.log(data);


    const foundUser = this.users.find((user: any) => user.emailu === data.emailu && user.passwordu === data.passwordu);
    console.log(foundUser);


    if (foundUser) {
     
      localStorage.setItem('username', foundUser.firstNameu+" "+foundUser.lastNameu);
      alert('Login successful');
      this.router.navigate(['/doctorprofile'])
    } else {
      console.log('Invalid email or password');
      alert('Invalid email or password');
    }
  }

  
   }


