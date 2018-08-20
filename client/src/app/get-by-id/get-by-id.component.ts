import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { RestaurantsService } from '../http.service';
import { Restaurant, Review } from '../task';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrls: ['./get-by-id.component.css']
})
export class GetByIDComponent implements OnInit {
  OneRestaurant: Restaurant;
  review: Review;
  errors: String[];

  constructor(private _restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.review = new Review();
    this.OneRestaurant = this._restaurantsService.restaurant
    console.log("On init in getById the restaurant is: " + this.OneRestaurant.RestName);
    this.errors = []
  }
  createReview(review, OneRestaurant): void {
    this.OneRestaurant = OneRestaurant;
    console.log("Called createReview");
    let observable = this._restaurantsService.createNewReview(this.review, this.OneRestaurant);
    console.log("The restaurant is: " + this.OneRestaurant.RestName);
    console.log("The CustName of the review is: " + review.CustName);
    observable.subscribe(
      (review) => {
        console.log(review);
      },
      (err) => {
        this.errors = err.erros;
        console.log(this.errors);
      }
    )
  }

}
