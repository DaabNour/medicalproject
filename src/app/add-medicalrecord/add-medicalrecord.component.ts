import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder ,Validators } from '@angular/forms';

@Component({
  selector: 'app-add-medicalrecord',
  templateUrl: './add-medicalrecord.component.html',
  styleUrls: ['./add-medicalrecord.component.css']
})
export class AddMedicalrecordComponent implements OnInit{
  mymedrecForm : FormGroup
  constructor(private fbmedre:FormBuilder) {
    let mdformControls ={
      datebirth : new FormControl(),
      appdate : new FormControl(),

      apptime : new FormControl(),
      diagnosis : new FormControl(),
      treatment : new FormControl(),

    }
    this.mymedrecForm=this.fbmedre.group(mdformControls)
  }

  ngOnInit(): void {
    
  }
  saveMedicalRecord(){
    console.log(this.mymedrecForm.value);

  }

}
