const {index, addCategory} = require('./homeController');
const {subCategoryIndex, addSubCategory} = require('./subCategoryController');
const {
  productIndex,
  addProduct,
  getProduct,
  addMoreSubView,
  addMoresubCat,
} = require('./productController');

module.exports = {
  index,
  addCategory,
  subCategoryIndex,
  addSubCategory,
  productIndex,
  addProduct,
  getProduct,
  addMoreSubView,
  addMoresubCat,
};
