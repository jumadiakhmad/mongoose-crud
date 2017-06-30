var mongoClient = require('mongodb').MongoClient();

var Customer = require('../models/customersModel');

function getAllCustomers(req,res) {
  Customer.find({}, function(err,data) {
    if(err) {
      res.send(err);
    }
    res.send(data)
  })
}

function getSingleCustomer(req,res) {
  Customer.find({
    _id : req.params.id
  }, function(err,result) {
    if(err) {
      res.send(err.message)
    }
    console.log(result);
    res.send(result);
  })
}

function createCustomer(req,res) {
  Customer.create({
    name : req.body.name,
    memberid : req.body.memberid,
    address : req.body.address,
    zipcode : req.body.zipcode,
    phone : req.body.phone
  }, function(err,data) {
    if(err){
      res.send(err.message)
    }
    console.log("Insert Data Customers Success");
    console.log(data);
    res.send(data);
  })
}

function updateCustomer(req,res) {
  Customer.find({
    _id : req.params.id
  }, function(err, result) {
    Customer.update({
      _id : req.params.id
    }, {
      $set : {
        name : req.body.name,
        memberid : req.body.memberid,
        address : req.body.address,
        zipcode : req.body.zipcode,
        phone : req.body.phone
      }
    }, (err,result) => {
      if(err) res.status(500).send(err)
      res.send(result);
    })
  })
}

function deleteCustomer(req, res) {
  Customer.remove({
    _id: req.params.id
  }, function(err, result) {
    if (err) {
      res.send(err.message);
    }
    console.log("Delete Data Customers Success");
    console.log(result);
    res.send(result);
  });
}


module.exports ={
  getAllCustomers,getSingleCustomer,createCustomer,updateCustomer,deleteCustomer
}
