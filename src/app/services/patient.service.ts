import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private getAllPatientsUrl = "http://localhost:8080/appointments/all";
  private getOnePatientUrl= "http://localhost:8080/patients{idp}";
  private updatePatientUrl="http://localhost:8080/patients/update/{idp}";
  private deletePatientUrl ="http://localhost:8080/patients/delete/{idp}";
  
  private addPatientUrl="http://localhost:8080/patients/add";
  private getOneAppointmentByDateUrl ="http://localhost:8080/appointments/byAppointmentDate/{appointmentDate}";
  private getOneAppointmentIDUrl="http://localhost:8080/appointments/{id}";

  constructor(private httppatient:HttpClient) {

  }

    getAllPatients(){
      return this.httppatient.get<any>(this.getAllPatientsUrl);
       

    }

    getOnePatientID(idp: String) {
      return this.httppatient.get<any>(this.getOnePatientUrl + idp)
    }
  
  

    deleteAppointment(idp: String) {
      return this.httppatient.delete<any>(this.deletePatientUrl + idp)
    }

    updatePatient(idp :String){
      return this.httppatient.put<any>(this.updatePatientUrl ,idp);
    }
}
    //addPatient() {
      //return this.httppatient.post<any>(this.addPatientUrl, );
    //}
    
   

    
