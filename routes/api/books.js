var express = require('express');
var router = express.Router();
var bookController = require('../../controllers/bookControllers');

router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getSingleBook);
router.post('/', bookController.createBook);
router.delete('/:id', bookController.deleteBook);
router.put('/:id', bookController.updateBook);

module.exports = router;
