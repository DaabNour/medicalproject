import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';
import {AppointmentListComponent} from './appointment-list/appointment-list.component';
import { AddMedicalrecordComponent } from './add-medicalrecord/add-medicalrecord.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginNavbarComponent } from './login-navbar/login-navbar.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { SecretaryNavbarComponent } from './secretary-navbar/secretary-navbar.component';
import { SecretaryProfileComponent } from './secretary-profile/secretary-profile.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { UsersListComponent } from './users-list/users-list.component';
import { MedicalrecordListComponent } from './medicalrecord-list/medicalrecord-list.component';
import { UpdateMedicalRecordComponent } from './update-medical-record/update-medical-record.component';
import { UpdateUserDetailsComponent } from './update-user-details/update-user-details.component';
import { DoctornavbarComponent } from './doctornavbar/doctornavbar.component';
import { MedicalDetailsComponent } from './medical-details/medical-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'navbar',
    component:NavbarComponent
  },
  {
    path:'footer',
    component:FooterComponent
  },





  {
    path:'contactus',
    component:ContactusComponent
  },
  {
    path:'login',
    component:LoginComponent
  },

  {path:'register',
  component:RegisterComponent
},






{
  path:'addappointment',
  component:AddAppointmentComponent
},
{
  path:'addmedicalrecord',
  component:AddMedicalrecordComponent
},





{
  path:'medicalrecordslist',
  component:MedicalrecordListComponent
},

{
  path:'appointmentlist',
  component:AppointmentListComponent
},
{
  path:'userslist',
  component:UsersListComponent
},






{
  path:'updateappointment/:id',
  component:UpdateAppointmentComponent
},

{
  path:'updateMed/:id',
  component:UpdateMedicalRecordComponent
},
{
  path:'updateuser/:id',
  component:UpdateUserDetailsComponent
},




{
  path:'secretaryprofile',
  component:SecretaryProfileComponent
},
{
  path:'doctorprofile',
  component:DoctorProfileComponent
},
{
  path:'profileuser',
  component:ProfileUserComponent
},

{
  path:'doctornavbar',
  component:DoctornavbarComponent
},



{
  path:'loginnavbar',
  component:LoginNavbarComponent
},

{
    path:'navbaruser',
    component:UserNavbarComponent
},
{
    path:'homeuser',
    component:UserHomeComponent
 },
{
    path:'secretarynavbar',
    component:SecretaryNavbarComponent
},
{
  path:'detailsmed/:id',
  component:MedicalDetailsComponent
},

{
  path:'detailsuser/:id',
  component:UserDetailsComponent
},
{
  path:'detailsappointment/:id',
  component:AppointmentDetailsComponent
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
