import { Component, OnInit } from '@angular/core';
import { PlaceService } from './place.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css'],
  providers: [PlaceService]
})
export class PlaceComponent implements OnInit {
  places = [];
  constructor(private placesServices: PlaceService) {
    this.places = this.placesServices.getPlaces();
  }

  ngOnInit() {
  }

}
