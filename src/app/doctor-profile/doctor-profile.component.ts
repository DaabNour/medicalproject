import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {



  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  doctorprofileForm : FormGroup

  constructor(private fbdocprofile:FormBuilder) {
    let doctorprofileformControls ={
      userfirst : new FormControl(),
      userlast : new FormControl(),
      userbirth : new FormControl(),

      useremail : new FormControl(),

      usertel : new FormControl(),

    }
    this.doctorprofileForm=this.fbdocprofile.group(doctorprofileformControls)
  }
 
  saveProfileDocotr(){
    console.log(this.doctorprofileForm.value);

   
  }

}
