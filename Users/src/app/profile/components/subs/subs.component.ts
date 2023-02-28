import { Component, OnInit } from '@angular/core';
import { SubsServiceService } from './../../services/subs-service.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { PickerInteractionMode } from 'igniteui-angular';


@Component({
  selector: 'app-subs',
  templateUrl: './subs.component.html',
  styleUrls: ['./subs.component.scss']
})
export class SubsComponent implements OnInit {
  payload;
  current_user;
  selected_sub;
  setSelected(sub){
    this.selected_sub = sub
    console.log(sub)
  }

  datify(str){return new Date(str)}
  public mode: PickerInteractionMode = PickerInteractionMode.DropDown;
  public format = 'hh:mm tt';
  public date = [new Date() , new Date() , new Date()];
  constructor( public subService:SubsServiceService , public state:SharedService) {
    this.current_user = JSON.parse(localStorage.getItem("user"))

    this.payload = subService.getSubscribtions(this.current_user._id).subscribe({
      next:(res:any[])=>{
        res = res.map(item => {return {...item , Dates:[...item.Dates.map(item => new Date(item))]}})
        this.payload = res
        console.log(new Date(res[0].Dates[0]) )
      }
    })
  }
  ngOnInit(): void {
    this.current_user = JSON.parse(localStorage.getItem("user"))
  }


async  deleteSub( sub_ID , substate){
    console.log(sub_ID)
    if(substate != 'pending'){
      await sweetAlert("Sorry", "You Cant Delete the subscription since it's not in pending state", "error");
      return;
    }
    this.subService.DeleteSubscribtions(this.current_user._id , sub_ID)
    .subscribe({
      next:(res) => {
        this.payload = this.payload.filter(e => e._id != sub_ID)
      }
    })
  }

  updateSub( ){
    //this.selected_sub.Dates = this.date
    console.log(this.selected_sub)
    this.subService.UpdateSubs(this.current_user._id , this.selected_sub._id , this.selected_sub)
    .subscribe({
      next: async (res) => {

        await  sweetAlert("Good job!", "You Have Successfully Updated Your Subscription", "success");
      },
      error: async (err) => {
        await  sweetAlert("Something wrong happened", "Please try again later", "error");
      }
    })
  }


}
