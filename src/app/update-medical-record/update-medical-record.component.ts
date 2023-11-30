import { Component, OnInit } from '@angular/core';
import { MedicalrecordService } from '../services/medicalrecord.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-medical-record',
  templateUrl: './update-medical-record.component.html',
  styleUrls: ['./update-medical-record.component.css']
})
export class UpdateMedicalRecordComponent implements OnInit {

  ngOnInit(): void {

    this.getdata();

  }

  updateMedForm : FormGroup
  constructor(private fbmedre:FormBuilder,private medservice:MedicalrecordService,private route: ActivatedRoute, private router : Router) {
    let mdformControls ={
      datenaiss : new FormControl(),
      appointmentDate : new FormControl(),
      appointmentTime : new FormControl(),
      diagnosis : new FormControl(),
      treatment : new FormControl(),


    }
    this.updateMedForm=this.fbmedre.group(mdformControls)
  }


  getdata(){
    this.route.params.subscribe(params => {
      let medrecID = +params['id'];
     console.log(medrecID);
     this.medservice.getOneMedicalRec(medrecID).subscribe(
      result => {
        console.log(result);
        let app = result;
        this.updateMedForm.patchValue(app);
      },
      error => {
        console.log(error);
      }
     )
      })
    }


    updateMed() {
    let data = this.updateMedForm.value;
    let idapt = this.route.snapshot.params['id'];
    console.log(idapt);
    let updatedapt=this.updateMedForm.value;



    this.medservice.updateMedicalRec(idapt,updatedapt).subscribe(
      (res:any)=>{

        console.log(res);
        this.router.navigate(['/medicalrecordslist'])


      },
      (err:any)=>{
        console.log(err);
      }
    )

  }

}
