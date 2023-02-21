import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  /**
   *
   */
  constructor(public sh:SharedService) {


  }
  backme(){

    document.querySelectorAll(".modal-body").forEach( e => e["style"].display='none' )
    document.getElementById('general').style.display='block'
  }
  show(id){
    document.getElementById('general').style.display='none'
    document.getElementById(id).style.display='block'
  }
  auth_flag = this.sh.my_checkAuth()
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
