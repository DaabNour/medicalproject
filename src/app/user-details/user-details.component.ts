import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  userForm : FormGroup

  constructor(private fbreg:FormBuilder,private userService:UserService,
    private route: ActivatedRoute, private router : Router) {
    let regformControls ={
      firstNameu : new FormControl(),
      lastNameu : new FormControl(),
      emailu : new FormControl(),
      phoneu : new FormControl(),
      passwordu : new FormControl(),

    }
    this.userForm=this.fbreg.group(regformControls)
  }
  ngOnInit(): void {
    this.getdata()
  }
  getdata(){
    this.route.params.subscribe(params => {
      let appointmentId = +params['id'];
     console.log(appointmentId);
     this.userService.getOneUser(appointmentId).subscribe(
      result => {
        console.log(result);
        let app = result;
        this.userForm.patchValue(app);
      },
      error => {
        console.log(error);
      }
     )
      })
    }

    updateuser() {
      let data = this.userForm.value;
      let iduser = this.route.snapshot.params['id'];
      console.log(iduser);
      let updatedapt=this.userForm.value;



      this.userService.updateUser(iduser,updatedapt).subscribe(
        (res:any)=>{
          console.log(res);
          this.router.navigate(['/userslist'])

         
        },
        (err:any)=>{
          console.log(err);
        }
      )

    }


}

