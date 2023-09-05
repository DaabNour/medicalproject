import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule , FormGroup } from '@angular/forms';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import {HttpClientModule} from '@angular/common/http';
import { AddMedicalrecordComponent } from './add-medicalrecord/add-medicalrecord.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginNavbarComponent } from './login-navbar/login-navbar.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { SecretaryNavbarComponent } from './secretary-navbar/secretary-navbar.component';
import { SecretaryProfileComponent } from './secretary-profile/secretary-profile.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    AddAppointmentComponent,
    UpdateAppointmentComponent,
    AppointmentListComponent,
    AddMedicalrecordComponent,
    ContactusComponent,
    LoginNavbarComponent,
    ProfileUserComponent,
    UserNavbarComponent,
    UserHomeComponent,
    SecretaryNavbarComponent,
    SecretaryProfileComponent,
    DoctorProfileComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
