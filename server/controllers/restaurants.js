const mongoose = require("mongoose");
const Restaurant = mongoose.model("Restaurant");

module.exports = {
    index: (req, res)=>{
        console.log("Made it to index method in controller")
        Restaurant.find({}, (err, restaurants)=>{
            if(err){
                console.log(err);
                res.status(400).json(err.errors)
            }else{
                console.log(restaurants);
                res.json(restaurants);
            }
        })
    },
    create: (req, res)=>{
        console.log("Made it to create method in controller"); 
        var restaurant = new Restaurant({
            RestName: req.body.RestName,
            Cuisine: req.body.Cuisine,
            _reviews: []
        });     
        restaurant.save((err, restaurant)=>{
            if (err) {
                console.log("Somthing went wrong", err.message);
                res.status(400).json(err.erros);
            }else{
                console.log("Successfully added restaurant!");
                res.json(restaurant);
            }
        });
    },
    show: (req, res)=>{
        console.log("Mode it to the show method in controller, the id is: ", req.params.id);
        Restaurant.findOne({_id:req.params.id}, (err, restaurant)=>{
            if (err){
                console.log(err);
                res.status(400).json(err.erros);
            }else{
                console.log(restaurant);
                res.json(restaurant);
            }
        })

    },
    update: (req, res)=>{
        console.log("Made it to update method in controller, the id is: ", req.params.id);
        Restaurant.update({_id:req.params.id},{
            RestName: req.body.RestName,
            Cuisine: req.body.Cuisine
        }, (err, restaurants)=>{
            if(err){
                console.log("There was an error ", err);
                res.status(400).json(err.errors);
            }else{
                console.log("Successfully edited restaurant!")
                res.json(restaurants);
            }
        });
    },
    create_review: (req, res)=>{
        console.log("Made it to create_review method")
        Review.update({_id:req.params.id},{$push:{CustName: req.body.CustName, stars: req.body.stars, description: req.body.description}})
        .then(restaurant => res.json(restaurant))
        .catch(err => res.send(err))
    },
    destroy: (req, res)=>{
        console.log("Made it to the detroy method in controller, the id is: ", req.params.id);
        Restaurant.remove({_id: req.params.id}, (err, restaurant)=>{
            if(err){
                console.log(err);
            }else{
                console.log("Successfully removed restaurant!");
                res.json(restaurant)
            }
        });
    }
}