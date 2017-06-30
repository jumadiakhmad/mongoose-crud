var mongoClient = require('mongodb').MongoClient();
//var url = 'mongodb://localhost:27017/library';
//var ObjectId = require('mongodb').ObjectId;
var Books = require('../models/booksModel');

function getAllBooks(req, res) {
  Books.find({},function(err,data){
    if(err) {
      res.send(err);
    }
    res.send(data);
  })
}

function getSingleBook(req, res) {
  Books.find({
    _id: req.params.id
  }, function(err, result) {
    if (err) {
      res.send(err.message);
    }
    console.log(result);
    res.send(result);
  });
}

function createBook(req,res) {
  Books.create({
    isbn : req.body.isbn,
    title : req.body.title,
    author : req.body.author,
    category : req.body.category,
    stock : req.body.stock
  }, function(err,data){
    if(err) {
      res.send(err.message)
    }
    console.log('Insert Data Books Success');
    res.send(data);
  })
}

function updateBook(req, res) {
  Books.find({
    _id: req.params.id
  }, function(err, result) {
    Books.update({
      _id: req.params.id
    }, {
      $set: {
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: req.body.stock
      }
    }, (err, result) => {
      if (err){
        res.send(err)
      }
        res.send(result);
    });
  });
}

function deleteBook(req, res) {
  Books.remove({
    _id: req.params.id
  }, function(err, result) {
    if (err) {
      res.send(err.message);
    }
    console.log("Delete Succes");
    console.log(result);
    res.send(result);
  });
}



module.exports = {
  getAllBooks, getSingleBook, createBook, deleteBook, updateBook
}
