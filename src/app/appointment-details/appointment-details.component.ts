import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AppointmentService } from '../services/appointment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit{
  ngOnInit(): void {

    this.getdata();

  }
  apppoiForm:FormGroup

  constructor(private fbapp:FormBuilder , private appoi:AppointmentService ,private route: ActivatedRoute,
     private router : Router) {
    let appformControls ={
      firstname : new FormControl(),
      appointmentDate : new FormControl(),
      appointmentTime : new FormControl()



    }
    this.apppoiForm=this.fbapp.group(appformControls)
  }
  get firstname() { return this.apppoiForm.get('firstname') }
  get lastname() { return this.apppoiForm.get('lastname') }
  get phone() { return this.apppoiForm.get('phone') }

getdata(){
  this.route.params.subscribe(params => {
    let appointmentId = +params['id'];
   console.log(appointmentId);
   this.appoi.getOneAppointmentID(appointmentId).subscribe(
    result => {
      console.log(result);
      let app = result;
      this.apppoiForm.patchValue(app);
    },
    error => {
      console.log(error);
    }
   )
    })
  }

  updateapt() {
    let data = this.apppoiForm.value;
    let idapt = this.route.snapshot.params['id'];
    console.log(idapt);
    let updatedapt=this.apppoiForm.value;



    this.appoi.updateAppointment(idapt,updatedapt).subscribe(
      (res:any)=>{

        console.log(res);
        this.router.navigate(['/appointmentlist'])

      },
      (err:any)=>{
        console.log(err);
      }
    )

  }

}



