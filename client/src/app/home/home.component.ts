import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { RestaurantsService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  restaurants: any = [];
  restaurant: any = [];
  review: any = [];
  
  constructor(private _restaurantsService: RestaurantsService){}

  ngOnInit(){
    this.getRestaurants();
  }

  getRestaurants(){
    let observable = this._restaurantsService.getRestaurants();
    observable.subscribe((restaurants) => {
      this.restaurants = restaurants;
      //console.log(`Here are all of the restaurants ${restaurants}`);
    });
  }

  editRestaurant(thisRestaurant, e){
    this._restaurantsService.restaurant = thisRestaurant;
  }

  getOneRestaurant(thisRestaurant, e){
    this._restaurantsService.restaurant = thisRestaurant;
    let observable = this._restaurantsService.getOneRestaurant(thisRestaurant);
    observable.subscribe((restaurant) => {
      this.restaurant = restaurant;
      console.log("Here is the restaurant id: " + this.restaurant._id);
    });
  }
  createReview(thisRestaurant, e){
    this._restaurantsService.restaurant = thisRestaurant;
  }

  removeRestaurant(thisRestaurant, e){
    let observable = this._restaurantsService.deleteRestaurant(thisRestaurant);
    observable.subscribe((restaurant) => {
      restaurant = thisRestaurant;
      console.log(restaurant);
      let tempObject = this.restaurants.find(x => x._id == this.restaurant._id);
      console.log("Here is the restaurant name: " + tempObject.RestName);
      let num = this.restaurants.indexOf(tempObject);
      console.log("Here is the index of the restaurant: " + num);
      this.restaurants.splice(num, 1);
    });
  }
}
