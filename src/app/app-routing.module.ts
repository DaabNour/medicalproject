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
const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {path:'register',
component:RegisterComponent},
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
  path:'addappointment',
  component:AddAppointmentComponent
},
{
  path:'updateappointment',
  component:UpdateAppointmentComponent
},
{
  path:'appointmentlist',
  component:AppointmentListComponent
},  

{
  path:'addmedicalrecord',
  component:AddMedicalrecordComponent
},
{
  path:'loginnavbar',
  component:LoginNavbarComponent
},

{
  path:'profileuser',
  component:ProfileUserComponent
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
    path:'secretaryprofile',
    component:SecretaryProfileComponent
  },
  {
    path:'doctorprofile',
    component:DoctorProfileComponent
  },
  
  {
    path:'userslist',
    component:UsersListComponent
  },
  {
    path:'medicalrecordslist',
    component:MedicalrecordListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
