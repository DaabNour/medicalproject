import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder ,Validators } from '@angular/forms';
import { AppointmentService } from '../services/appointment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {
  myappForm : FormGroup
  constructor(private fbapp:FormBuilder, private aptService:AppointmentService,private route: ActivatedRoute,
     private router : Router) {
    let appformControls ={
      firstname : new FormControl(),
      appointmentDate : new FormControl(),
      appointmentTime : new FormControl()
    }
    this.myappForm=this.fbapp.group(appformControls)
  }

  ngOnInit(): void {

  }
  saveAppointment(){
    let apt=this.myappForm.value;
    this.aptService.addAppointment(apt).subscribe(
      result => {
        console.log(result);
        alert("Appointment added successfully");
        this.router.navigate(['/appointmentlist'])
      },
      error => {
        console.log(error);
      }
    )

  }

  }




