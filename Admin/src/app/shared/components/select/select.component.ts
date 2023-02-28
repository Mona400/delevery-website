import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent  implements OnInit{
 @Input() title:string="";
 @Input() data:any[]=['breakfast' , 'lunch' , 'dinner']
 @Output() selectedValue=new EventEmitter()
  ngOnInit(): void {
    this.data =['breakfast' , 'lunch' , 'dinner']
  }
  detectChanges(event:any){
    this.selectedValue.emit(event)

  }

}
