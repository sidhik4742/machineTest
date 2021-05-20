var express = require('express');
var router = express.Router();

const homeController = require('../Controllers/index')

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', homeController.index);
router.post('/category', homeController.addCategory);
router.get('/subcategory', homeController.subCategoryIndex);
router.post('/subcategory', homeController.addSubCategory);

router.get('/product', homeController.productIndex);
router.post('/addProduct', homeController.addProduct);

router.get('/addMoreSub/:id', homeController.addMoreSubView);
router.post('/addMoreSub', homeController.addMoresubCat);

router.get('*', homeController.getProduct);

module.exports = router;
