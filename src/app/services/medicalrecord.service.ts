import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200' // Replace with your server's URL
  })
};

@Injectable({
  providedIn: 'root'
})
export class MedicalrecordService {
  private getAllMedicalRecUrl = "http://localhost:8080/MedicalRecords/all";
  private deleteMedicalRecUrl ="http://localhost:8080/MedicalRecords/delete/{id}";
  private deleteAllMedicalRecUrl="http://localhost:8080//MedicalRecords/deleteAll"
  private getOneMedicalRecUrl= "http://localhost:8080/MedicalRecords/{id}";
  private addAMedicalRecUrl="http://localhost:8080/MedicalRecords/add";
  private getOneMedicalRecByDateUrl ="http://localhost:8080/MedicalRecords/byDatenaiss/{datebirth}";
  private updateMedicalRecUrl="http://localhost:8080/MedicalRecords/update//{id}";

  constructor(private httpmedicalrecord:HttpClient) {

  }

    getAllMedicalRecs(){
      return this.httpmedicalrecord.get<any>(this.getAllMedicalRecUrl);
       

    }

    
  getOneMedicalRec(firstname: String) {
    return this.httpmedicalrecord.get<any>(this.getOneMedicalRecUrl + firstname)
  }


    deleteMedicalRec(id: String) {
      return this.httpmedicalrecord.delete<any>(this.deleteMedicalRecUrl + id)
    }

    deleteAllMedicalRec(){
      return this.httpmedicalrecord.delete(this.deleteAllMedicalRecUrl);
    }

    //addAMedicalRec() {
      //return this.httpmedicalrecord.post<any>(this.addAMedicalRecUrl, );
    //}
    
    getOneMedicalRecByDate(datebirth: String) {
      return this.httpmedicalrecord.get<any>(this.getOneMedicalRecByDateUrl + datebirth)
    }

    updateMedicalRec(id :String){
      return this.httpmedicalrecord.put<any>(this.updateMedicalRecUrl ,id);
    }
   }


