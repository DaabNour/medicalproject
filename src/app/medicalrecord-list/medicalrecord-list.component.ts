import { Component, OnInit } from '@angular/core';
import { MedicalrecordService } from '../services/medicalrecord.service';

@Component({
  selector: 'app-medicalrecord-list',
  templateUrl: './medicalrecord-list.component.html',
  styleUrls: ['./medicalrecord-list.component.css']
})
export class MedicalrecordListComponent implements OnInit {
  ListMed :any[]=[] ;

  constructor(private medicalrecordservice:MedicalrecordService){

  }
    ngOnInit(): void {
      this.getAllMedicalRecs();
      
    }

    getAllMedicalRecs(){
      this.medicalrecordservice.getAllMedicalRecs().subscribe(
        (result:any) =>{
          console.log(result);
          this.ListMed=result;
          
        } ,
        (error:any) =>{
          console.error('Une erreur s\'est produite lors du chargement des catégories : ', error);
        }
  
      )
}

}