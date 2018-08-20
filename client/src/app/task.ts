export class Restaurant {
    RestName: String = '';
    Cuisine: String = '';
    _reviews: Review[];
}
export class Review {
    CustName: String;
    stars: Number;
    description: String;
}