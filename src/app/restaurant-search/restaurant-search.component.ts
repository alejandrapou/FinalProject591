import { Component, OnInit } from '@angular/core';
import {DestinationObj as Destination} from '../destination-obj'

@Component({
  selector: 'app-restaurant-search',
  templateUrl: './restaurant-search.component.html',
  styleUrls: ['./restaurant-search.component.css']
})
export class RestaurantSearchComponent implements OnInit {

  destinations: Destination[];
  message: string;
  destination: Destination;

  addDestination(form):void{
    let dest = new Destination(form);
    this.destinations.push(destination);
    this.message = `Added ${dest.name}`
  }

  constructor() {
    this.destinations = [];
    this.message = '';
    this.destination = new Destination ({name: '', nameRestaurant:'', phone:''})
  }

  ngOnInit() {
  }

}
