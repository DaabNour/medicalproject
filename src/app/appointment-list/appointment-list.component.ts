import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  List :any[]=[] ;


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
        console.error('Une erreur s\'est produite lors du chargement des appointments : ', error);
      }

    )



    }

  deleteappointment(id: number) {

      this.appointmentService.deleteAppointment(id).subscribe(
        (response) => {
          console.log("deleted with success");
        },
        (error) => {
          console.error('Error deleting medical record', error);
        }
      );
    }

}
