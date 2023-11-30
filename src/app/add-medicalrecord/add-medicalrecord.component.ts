import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder ,Validators } from '@angular/forms';
import { MedicalrecordService } from '../services/medicalrecord.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-medicalrecord',
  templateUrl: './add-medicalrecord.component.html',
  styleUrls: ['./add-medicalrecord.component.css']
})
export class AddMedicalrecordComponent implements OnInit{
  mymedrecForm : FormGroup
  constructor(private fbmedre:FormBuilder,private medservice:MedicalrecordService,private route: ActivatedRoute, private router : Router) {
    let mdformControls ={
      datenaiss : new FormControl(),
      appointmentDate : new FormControl(),
      appointmentTime : new FormControl(),
      diagnosis : new FormControl(),
      treatment : new FormControl(),


    }
    this.mymedrecForm=this.fbmedre.group(mdformControls)
  }

  ngOnInit(): void {

  }
  saveMedicalRecord(){
    console.log(this.mymedrecForm.value);

    let medrec=this.mymedrecForm.value;
    this.medservice.addAMedicalRec(medrec).subscribe(
      result => {
        console.log(result);
        alert("Medical Record Added Successfully");
        this.router.navigate(['/medicalrecordslist'])

      },
      error => {
        console.log(error);
      }
    )

  }

}
