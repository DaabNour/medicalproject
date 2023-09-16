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
  private deleteAppointmentUrl ="http://localhost:8080/appointments/delete/{id}";
  private getOneAppointmentUrl= "http://localhost:8080/appointments/byFirstname/{firstname}";
  private addAppointmentUrl="http://localhost:8080/appointments/add";
  private getOneAppointmentByDateUrl ="http://localhost:8080/appointments/byAppointmentDate/{appointmentDate}";
  private updateAppointmentUrl="http://localhost:8080/appointments/update/{id}";
  private getOneAppointmentIDUrl="http://localhost:8080/appointments/{id}"
  constructor(private httpappointment:HttpClient) {

  }

    getAllAppointments(){
      return this.httpappointment.get(this.getAllAppointmentsUrl,httpOptions);
       

    }

    getOneAppointmentID(id: String): Observable<any> {
      return this.httpappointment.get<any>(this.getOneAppointmentIDUrl + id)
    }
  

    
  getOneAppointment(firstname: String) {
    return this.httpappointment.get<any>(this.getOneAppointmentUrl + firstname)
  }


    deleteAppointment(id: String) {
      return this.httpappointment.delete<any>(this.deleteAppointmentUrl + id)
    }

    //addAppointment() {
      //return this.httpappointment.post<any>(this.addAppointmentUrl, );
    //}
    
    getOneAppointmentByDate(appointmentDate: String) {
      return this.httpappointment.get<any>(this.getOneAppointmentByDateUrl + appointmentDate)
    }

    updateAppointment(id :String){
      return this.httpappointment.put<any>(this.updateAppointmentUrl ,id);
    }
   }