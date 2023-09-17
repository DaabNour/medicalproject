import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrls: ['./update-appointment.component.css']
})
export class UpdateAppointmentComponent implements OnInit{
  ngOnInit(): void {

  }
  updateappForm:FormGroup

  constructor(private fbapp:FormBuilder) {
    let appformControls ={
      firstname : new FormControl(),
      appointmentdate : new FormControl(),
      appointmenttime : new FormControl()



    }
    this.updateappForm=this.fbapp.group(appformControls)
  }
  get firstname() { return this.updateappForm.get('firstname') }
  get lastname() { return this.updateappForm.get('lastname') }
  get phone() { return this.updateappForm.get('phone') }


 
 

}
