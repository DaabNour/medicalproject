import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{
  ListU :any[]=[] ;
  Person:any[]=[]



constructor(private userService:UserService){


}
  ngOnInit(): void {
    this.getAllUsers();

  }
  getAllUsers(){
    this.userService.getAllUsers().subscribe(
      (result:any) =>{
        console.log(result);
        this.ListU=result;
      } ,
      (error:any) =>{
        console.error('Une erreur s\'est produite lors du chargement des catégories : ', error);
      }

    )
    }

    delete(id: number) {

      this.userService.deleteUser(id).subscribe(
        (response) => {
          console.log("deleted with success");
        },
        (error) => {
          console.error('Error deleting medical record', error);
        }
      );
    }


}



