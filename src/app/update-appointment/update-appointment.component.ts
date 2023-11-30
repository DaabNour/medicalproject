import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder} from '@angular/forms';
import { AppointmentService } from '../services/appointment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrls: ['./update-appointment.component.css']
})
export class UpdateAppointmentComponent implements OnInit{
  ngOnInit(): void {

    this.getdata();

  }
  updateappForm:FormGroup

  constructor(private fbapp:FormBuilder , private appoi:AppointmentService ,private route: ActivatedRoute, private router : Router) {
    let appformControls ={
      firstname : new FormControl(),
      appointmentDate : new FormControl(),
      appointmentTime : new FormControl()



    }
    this.updateappForm=this.fbapp.group(appformControls)
  }
  get firstname() { return this.updateappForm.get('firstname') }
  get lastname() { return this.updateappForm.get('lastname') }
  get phone() { return this.updateappForm.get('phone') }

getdata(){
  this.route.params.subscribe(params => {
    let appointmentId = +params['id'];
   console.log(appointmentId);
   this.appoi.getOneAppointmentID(appointmentId).subscribe(
    result => {
      console.log(result);
      let app = result;
      this.updateappForm.patchValue(app);
    },
    error => {
      console.log(error);
    }
   )
    })
  }

  updateapt() {
    let data = this.updateappForm.value;
    let idapt = this.route.snapshot.params['id'];
    console.log(idapt);
    let updatedapt=this.updateappForm.value;



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






