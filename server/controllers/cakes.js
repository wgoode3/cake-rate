const mongoose = require('mongoose'),
          Cake = mongoose.model("Cake"),
        Review = mongoose.model("Review");

function Cakes(){

    // return all of the cakes
    this.index = function(req, res){
        Cake.find({}, function(err, cakes){
            if(err){
                res.json({'status': 500, 'errors': err});
            }else{
                res.json({'status': 200, 'cakes': cakes});
            }
        });
    }

    // create a new cake
    this.create = function(req, res){
        // console.log(req.body);
        Cake.create(req.body, function(err, cake){
            if(err){
                res.json({'status': 500, 'errors': err});
            }else{
                res.json({'status': 200});
            }
        });
    }

    // return a single cake
    this.getOne = function(req, res){
        Cake.findOne({_id: req.params._id}, function(err, cake){
            if(err){
                res.json({'status': 500, 'errors': err});
            }else{
                res.json({'status': 200, 'cake': cake});
            }
        });
    }

    // updates a cake
    this.update = function(req, res){
        Cake.update({_id: req.params._id}, {$push: req.body}, function(err, cake){
            if(err){
                res.json({'status': 500, 'errors': err});
            }else{
                res.json({'status': 200, 'cake': cake});
            }
        });
    }

    // deletes a cake
    this.delete = function(req, res){
        Cake.remove({_id: req.params._id}, function(err){
            if(err){
                res.json({'status': 500, 'errors': err});
            }else{
                res.json({'status': 200});
            }
        });
    }

    // add a review to a cake
    this.rate = function(req, res){
        Review.create(req.body, function(err, review){
            if(err){
                res.json({'status': 500, 'errors': err});
            }else{
                // console.log('the review', review);
                Cake.findOneAndUpdate({_id: req.params._id}, {$push: {reviews: review}}, function(err, cake){
                    // console.log(cake, review);
                    if(err){
                        res.json({'status': 500, 'errors': err});
                    }else{
                        res.json({'status': 200, 'cake': cake});
                    }
                });
            }
        });
    }

}

module.exports = new Cakes();