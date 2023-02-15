import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rest-details',
  templateUrl: './rest-details.component.html',
  styleUrls: ['./rest-details.component.scss']
})
export class RestDetailsComponent implements OnInit {

  payload={
    branches : ['Camarillo70975 Mandy Green'],
    description: "Recusandae quisquam beatae adipisci animi vitae quasi.\nSoluta debitis blanditiis repudiandae ut ex earum culpa voluptates nam.",
    image: "https://loremflickr.com/640/480",
    meals: ['63e253ce76eaa2ba94d3f515'],
    rating: 1.291,
    reviews: [],
    slug: "Northeast-Congo-Lion",
    social_media: {facebook: 'https://www.facebook.com/', twitter: 'https://twitter.com/home'},
    speciality: "saepe architecto voluptatibus inventore",
    title: "Northeast Congo Lion",
    _id: "63ec00c2fe1a6e27638c45f2"
  }
  constructor(public State:SharedService , public avtivRoute:ActivatedRoute){}

  ngOnInit(): void {
    const slug = this.avtivRoute.snapshot.params["slug"]

    //this.payload = this.State.state["commuter"].find(e => e.slug == slug)
    console.log(this.payload)
  }

}
