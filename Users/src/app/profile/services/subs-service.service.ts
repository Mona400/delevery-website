import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SubsServiceService {

  constructor(private http:HttpClient) { }

  getSubscribtions(userID){
   return this.http.get(environment.baseApi + `users/${userID}/subs`,{
    headers:{
      authorization:localStorage.getItem("token")
    }
  })
  }
  DeleteSubscribtions(userID , subID){
    return this.http.delete(environment.baseApi + `users/${userID}/subs/${subID}`,{
      headers:{
        authorization:localStorage.getItem("token")
      }
    })
   }

   UpdateSubs(userID , subID , payload){
    return this.http.patch(environment.baseApi + `users/${userID}/subs/${subID}` , payload,{
      headers:{
        authorization:localStorage.getItem("token")
      }
    })
   }
}
