import { Component } from '@angular/core';
import * as Aos from 'aos';
// import fs  from "font-awesome";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(){ Aos.init({once: true,easing: 'ease'});}
  title = 'Ecommerce';
}
