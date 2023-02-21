import { Component } from '@angular/core';
import { SubsServiceService } from './../../services/subs-service.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { PickerInteractionMode } from 'igniteui-angular';


@Component({
  selector: 'app-subs',
  templateUrl: './subs.component.html',
  styleUrls: ['./subs.component.scss']
})
export class SubsComponent {
  payload;
  selected_sub;
  setSelected(sub){
    this.selected_sub = sub
  }
  public mode: PickerInteractionMode = PickerInteractionMode.DropDown;
  public format = 'hh:mm tt';
  public date = [new Date() , new Date() , new Date()];
  constructor( public subService:SubsServiceService , public state:SharedService) {
    this.payload = subService.getSubscribtions(state.current_user._id).subscribe({
      next:(res)=>{
        this.payload = res
        console.log(res)
      }
    })
  }


  deleteSub( sub_ID){
    console.log(sub_ID)
    this.subService.DeleteSubscribtions(this.state.current_user._id , sub_ID)
    .subscribe({
      next:(res) => {
        this.payload = this.payload.filter(e => e._id != sub_ID)
      }
    })
  }

  updateSub( ){
    this.selected_sub.Dates = this.date
    console.log(this.selected_sub)
    // this.subService.UpdateSubs(this.state.current_user._id , sub._id , sub)
    // .subscribe({
    //   next:(res) => {
    //     console.log(res)
    //   }
    // })
  }


}
