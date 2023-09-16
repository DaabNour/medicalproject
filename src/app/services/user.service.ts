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
export class UserService {

  private getAllUsersUrl = "http://localhost:8080/users/all";
  private updateUserUrl="http://localhost:8080/users/update/{idu}";
  private getUserUrl= "http://localhost:8080/users/{idu}";
  private deleteUserUrl ="http://localhost:8080/users/delete/{idu}";
  private deleteUserRoleUrl="http://localhost:8080/users/delete/{roleu}"
  private addUserUrl="http://localhost:8080/users/add";
  private getOneUserByRole ="hhttp://localhost:8080/users/byRole/{roleu}";
  
  constructor(private httpuser:HttpClient) {

  }

    getAllUsers(){
      return this.httpuser.get<any>(this.getAllUsersUrl,httpOptions);
       

    }

    
  
  getOneUser(idu: String) {
    return this.httpuser.get<any>(this.getUserUrl + idu)
  }


  getOneUserRole(roleu: String) {
    return this.httpuser.get<any>(this.getOneUserByRole )
  }

  
    deleteUser(idu: String) {
      return this.httpuser.delete<any>(this.deleteUserUrl + idu)
    }

    //addUser() {
      //return this.httpuser.post<any>(this.addUserUrl, );
    //}
    
    deleteUserRole(roleu: String) {
      return this.httpuser.delete<any>(this.deleteUserRoleUrl )
    }
  
    updateUser(idu :String){
      return this.httpuser.put<any>(this.updateUserUrl ,idu);
    }
}
