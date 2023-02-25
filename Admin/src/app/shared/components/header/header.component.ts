import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  current_user
  auth_flag
  constructor(public sh:SharedService){
    this.current_user = JSON.parse(localStorage.getItem("user"));
    this.auth_flag = this.sh.my_checkAuth()
  }
  id:any
  drop(param:any){
    if(this.id==param){
      this.id=" "
    }
    else{
      this.id=param;
    }

  }
}
