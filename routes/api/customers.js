var express = require('express');
var router = express.Router();
var customerController = require('../../controllers/customerControllers');

router.get('/', customerController.getAllCustomers);
router.get('/:id', customerController.getSingleCustomer);
router.post('/', customerController.createCustomer);
router.delete('/:id', customerController.deleteCustomer);
router.put('/:id', customerController.updateCustomer);
module.exports = router;
