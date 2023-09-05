import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder ,Validators } from '@angular/forms';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {
  myappForm : FormGroup
  constructor(private fbapp:FormBuilder) {
    let appformControls ={
      firstname : new FormControl(),
      appointmentdate : new FormControl(),
      appointmenttime : new FormControl()



    }
    this.myappForm=this.fbapp.group(appformControls)
  }

  ngOnInit(): void {
    
  }
  saveAppointment(){
    console.log(this.myappForm.value);

  }

  }




