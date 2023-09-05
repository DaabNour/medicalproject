import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  mycontactForm : FormGroup
  
  
  constructor(private fbcontact:FormBuilder) {
    let contactformControls ={
      namecontact : new FormControl(),
      emailcontact : new FormControl(),
      message : new FormControl(),

    }
    this.mycontactForm=this.fbcontact.group(contactformControls)
  }
  ngOnInit(): void {
   
  }
  savemsg(){
    console.log(this.mycontactForm.value);

}
}
