import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  restaurant;
  review;
  constructor(private _http: HttpClient){}

  getRestaurants(){
    return this._http.get('/restaurants');
  }
  createRestaurants(restaurant){
    return this._http.post('/restaurants/new', restaurant);
  }
  updateRestaurant(thisRestaurant) {
    return this._http.patch(`/restaurants/${thisRestaurant._id}/edit`, thisRestaurant);
  }
  deleteRestaurant(thisRestaurant){
    return this._http.delete(`/restaurants/${thisRestaurant._id}`, thisRestaurant);
  }
  getOneRestaurant(thisRestaurant) {
    return this._http.get(`/restaurants/${thisRestaurant._id}`, thisRestaurant)
  }
  createNewReview(review, thisRestaurant){
    return this._http.post(`restaurants/${thisRestaurant._id}/review`, review, thisRestaurant)
  }
}