var mongoose = require('mongoose');


//Genre schema

var bookSchema = mongoose.Schema({
  title: {
    type:String,
  },
  genres:{
    type:String,
  },
  description:{
    type:String,
  },
  author:{
    type:String,
  },
  publisher:{
    type:String,
  },
  pages:{
    type:String,
  },
  image_url:{
    type:String,
  },
  buy_url:{
    type:String,
  },
  create_date:{
    type: Date,
    default: Date.now
  }

});

var Book = module.exports = mongoose.model('Book',bookSchema);

//get Books

module.exports.getBooks = function(callback,limit){
Book.find(callback).limit(limit);
}

//get book
module.exports.getBookById = function(id,callback){
Book.findById(id,callback);
}


//add Book

module.exports.addBook = function(book,callback){
  Book.create(book,callback);
}


//update Book

module.exports.updateBook = function(id,book,options,callback){
  var query = {_id:id};
  var update = {
    title: book.title,
    genre: book.genre,
    description: book.description,
    author: book.author,
    publisher: book.publisher,
    image_url: book.image_url,
    buy_url:book.buy_url,
    pages:book.pages

  };
  Book.findOneAndUpdate(query,update,options,callback);
}


//delete book

module.exports.deleteBook = function(id,callback){
  var query = {_id:id};
  Book.remove(query,callback);
}
