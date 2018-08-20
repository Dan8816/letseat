import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { RestaurantsService } from '../http.service';
import { Restaurant } from '../task';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  thisRestaurant: Restaurant;
  errors: string[];

  constructor(private _restaurantsService: RestaurantsService){
    this.thisRestaurant = new Restaurant();
  }

  ngOnInit() {
    this.thisRestaurant = this._restaurantsService.restaurant
    console.log(this.thisRestaurant)
    this.errors;
  }

  editRestaurant(thisRestaurant, e): void {
    e.preventDefault();
    this._restaurantsService.restaurant = thisRestaurant;
    let observable = this._restaurantsService.updateRestaurant(this.thisRestaurant);
    observable.subscribe(
      // Callback
      (restaurant) => {
        console.log(restaurant);
      },
      // Errorback
      (err) => {
        this.errors = err.error;
        console.log(this.errors);
      }
    )
  }

}
