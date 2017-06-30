var Transaction = require('../models/transactionsModel');

function getAll(req,res) {
  Transaction.find().populate('booklist')
  .exec(function (err,result){
    if(err) res.status(500).send(err)
    res.send(result);
  })
}

function getSingle(req,res) {
  Transaction.findById({_id : req.params.id}).populate('booklist')
  .exec(function(err,result){
    if(err) res.status(500).send(err)
    console.log('Get Single Transactions');
    res.send(result)
  })
}

function createTransaction(req,res) {
  let now = new Date();
  now.setDate(now.getDate() + parseInt(req.body.days));

  Transaction.create({
    memberid : req.body.memberid,
    days : req.body.days,
    out_date : new Date(),
    due_date : now,
    booklist : req.body.booklist
    // in_date dan fine ketika buku dikembalikan (updateTransaction)
  }, function(err,result){
    if(err) res.status(500).send(err)
    console.log('Create Success');
    res.send(result)
  })
}

function deleteTransaction(req,res) {
  Transaction.remove({
    _id : req.params.id
  }, function(err,result){
    if(err) res.status(500).send(err)
    console.log('Delete Success');
    res.send(result);
  })
}

function updateTransaction(req,res) {
  let id = req.params.id ;

  Transaction.findById(id, function(err,result) {
    if(err) res.status(500).send(err);
    result.in_date = new Date();
    if(result.in_date > result.due_date){
      let late = Math.round((result.in_date - result.due_date) / (1000*24*3600));
      let bookCount = result.booklist.length * 500;
    } else {
      result.fine = 0 ;
    }
    result.save((err) => {
      if(err) res.status(500).send(err)
      console.log('Update Transaction Success');
      res.send(result);
    })
  })
}

module.exports = {
  getAll,getSingle,createTransaction,deleteTransaction,updateTransaction
}
