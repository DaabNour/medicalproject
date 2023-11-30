import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200' // Replace with your server's URL
  })
};

@Injectable({
  providedIn: 'root'
})

export class AppointmentService {

  private getAllAppointmentsUrl = "http://localhost:8080/appointments/all";
  private deleteAppointmentUrl ="http://localhost:8080/appointments/delete/";
  private getOneAppointmentUrl= "http://localhost:8080/appointments/byFirstname";
  private addAppointmentUrl="http://localhost:8080/appointments/add";
  private getOneAppointmentByDateUrl ="http://localhost:8080/appointments/byAppointmentDate";
  private updateAppointmentUrl="http://localhost:8080/appointments/update/";
  private getOneAppointmentIDUrl="http://localhost:8080/appointments/"

  constructor(private httpappointment:HttpClient) {

  }

    getAllAppointments(){
      return this.httpappointment.get(this.getAllAppointmentsUrl,httpOptions);


    }

    getOneAppointmentID(id: number) {
      return this.httpappointment.get<any>(this.getOneAppointmentIDUrl + id)
    }



  getOneAppointment(firstname: String) {
    return this.httpappointment.get<any>(this.getOneAppointmentUrl + firstname)
  }


    deleteAppointment(id: number) {
      return this.httpappointment.delete<any>(this.deleteAppointmentUrl + id)
    }

    addAppointment(apt: any) {
      return this.httpappointment.post(this.addAppointmentUrl ,apt);
    }

    getOneAppointmentByDate(appointmentDate: String) {
      return this.httpappointment.get<any>(this.getOneAppointmentByDateUrl + appointmentDate)
    }

    updateAppointment(id :number,uapt: any){
      return this.httpappointment.put<any>(this.updateAppointmentUrl +id, uapt);
    }
   }
