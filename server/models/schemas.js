const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RestaurantSchema = new mongoose.Schema({
    RestName: {type: String, minlength:[2, "Name must be atleast 3 chars"],required: [true, "Name field must be at least 3 characters"]},
    Cuisine:  {type: String, minlength:[2, "Cuisine must be atleast 3 chars"],required: [true, "Cuisine field must be at least 3 characters"]},
    _reviews:[{type: Schema.Types.ObjectId, ref: 'Rating'}]
   }, {timestamps: true})
mongoose.model('Restaurant', RestaurantSchema);// We are setting this Schema in our Models as 'Restaurant'

const ReviewSchema = new mongoose.Schema({
    CustName: {type: String, minlength:[2, "Name must be atleast 3 chars"],required: [true, "Name field must be at least 3 characters"]},
    stars: {type: Number, minlength:1,required: [true, "Stars need at least 1 rating"]},
    description: {type: String, minlength:4,required: [true, "description field must be at least 8 characters"]}
   }, {timestamps: true})
mongoose.model('Review', ReviewSchema);