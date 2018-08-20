var mongoose = require('mongoose');
var Restaurant = mongoose.model('Restaurant') // We are retrieving this Schema from our Models, named 'Author'
const restaurants = require("./../controllers/restaurants");
var path = require('path')

module.exports = (app)=>{
    app.get("/restaurants", restaurants.index),//index route
    app.post("/restaurants/new", restaurants.create),//post body info to create element in Db
    app.get("/restaurants/:id", restaurants.show),//get one element by id from Db
    app.post("/rate/:id/review", restaurants.create_review),
    app.patch("/restaurants/:id/edit", restaurants.update),//update an element by id with body info
    app.delete('/restaurants/:id', restaurants.destroy),//delete an element by id from Db
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./client/dist/client/index.html"))
    });
}