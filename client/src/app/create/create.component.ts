import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { RestaurantsService } from '../http.service';
import { Restaurant } from '../task';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  restaurant: Restaurant;
  errors: string[];
  
  constructor(private _RestaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.restaurant = new Restaurant();
    this.errors = [];
  }

  createRestaurant(e): void {
    e.preventDefault();
    let observable = this._RestaurantsService.createRestaurants(this.restaurant);
    observable.subscribe(
      // Callback
      (restaurant) =>{
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
