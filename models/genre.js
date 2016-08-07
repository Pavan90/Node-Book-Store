var mongoose = require('mongoose');


//Genre schema

var genreSchema = mongoose.Schema({
  name: {
    type:String,
  },
  create_date:{
    type: Date,
    default: Date.now
  }

});

var Genre = module.exports = mongoose.model('Genre',genreSchema);

//get Genres

module.exports.getGenres = function(callback,limit){
Genre.find(callback).limit(limit);
}

//add Genre

module.exports.addGenre = function(genre,callback){
  Genre.create(genre,callback);
}

//update Genre

module.exports.updateGenre = function(id,genre,options,callback){
  var query = {_id:id};
  var update = {
    name: genre.name
  };
  Genre.findOneAndUpdate(query,update,options,callback);
}



//delete Genre

module.exports.deleteGenre = function(id,callback){
  var query = {_id:id};
  Genre.remove(query,callback);
}
