import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  List :any[]=[] ;

  appointmentList =[
    {id: 1,
      firstname: "Nour",
      appointmentDate:"17-01-2023",
      appointmentTime:"17h20",
    },
    {id: 2,
      firstname: "Ayoub",
      appointmentDate:"20-05-2023",
      appointmentTime:"09h20",
    },
    {id: 3,
      firstname: "emna",
      appointmentDate:"01-01-2023",
      appointmentTime:"10h20",
    },
    

  ]
constructor(private appointmentService:AppointmentService){

}
  ngOnInit(): void {
    this.getAllAppointments();
    
  }
  getAllAppointments(){
    this.appointmentService.getAllAppointments().subscribe(
      (result:any) =>{
        console.log(result);
        this.List=result;
        
      } ,
      (error:any) =>{
        console.error('Une erreur s\'est produite lors du chargement des catégories : ', error);
      }

    )

  
    }
}