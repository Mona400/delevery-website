import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  GetAllUsers(){
    return this.http.get(environment.baseApi + 'admin/users')
  }

  UpdateUser(userID , payload){
    return this.http.patch(environment.baseApi + 'admin/users/'+userID , payload)
  }


  DeleteUser(userID ){
    return this.http.delete(environment.baseApi + 'admin/users/'+userID )
  }


}
