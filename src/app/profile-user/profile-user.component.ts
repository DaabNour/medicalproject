import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {
  myprofileForm : FormGroup

  constructor(private fbprofile:FormBuilder) {
    let profileformControls ={
      userfirst : new FormControl(),
      userlast : new FormControl(),
      userbirth : new FormControl(),

      useremail : new FormControl(),

      usertel : new FormControl(),

    }
    this.myprofileForm=this.fbprofile.group(profileformControls)
  }
  ngOnInit(): void {
  }
  
  saveProfile(){
    console.log(this.myprofileForm.value);

   
  }


}
