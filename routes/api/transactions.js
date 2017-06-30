var express = require('express');
var router = express.Router();
var transactionController = require('../../controllers/transactionController');

router.get('/', transactionController.getAll);
router.get('/:id', transactionController.getSingle);
router.post('/', transactionController.createTransaction);
router.delete('/:id', transactionController.deleteTransaction);
router.put('/:id', transactionController.updateTransaction);

module.exports = router;
