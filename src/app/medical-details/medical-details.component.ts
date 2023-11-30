import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MedicalrecordService } from '../services/medicalrecord.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-medical-details',
  templateUrl: './medical-details.component.html',
  styleUrls: ['./medical-details.component.css']
})
export class MedicalDetailsComponent implements OnInit {

  ngOnInit(): void {

    this.getdata();

  }

  detMedForm : FormGroup
  constructor(private fbmedre:FormBuilder,private medservice:MedicalrecordService,
    private route: ActivatedRoute, private router : Router) {
    let mdformControls ={
      datenaiss : new FormControl(),
      appointmentDate : new FormControl(),
      appointmentTime : new FormControl(),
      diagnosis : new FormControl(),
      treatment : new FormControl(),


    }
    this.detMedForm=this.fbmedre.group(mdformControls)
  }


  getdata(){
    this.route.params.subscribe(params => {
      let medrecID = +params['id'];
     console.log(medrecID);
     this.medservice.getOneMedicalRec(medrecID).subscribe(
      result => {
        console.log(result);
        let app = result;
        this.detMedForm.patchValue(app);
      },
      error => {
        console.log(error);
      }
     )
      })
    }


    

}
