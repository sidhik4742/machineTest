const {
  index,
  addCategory,
  updateCatView,
  updateCat,
} = require('./homeController');
const {
  subCategoryIndex,
  addSubCategory,
  updateSubCatView,
  updateSubCat,
} = require('./subCategoryController');
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
  updateCatView,
  updateCat,
  updateSubCatView,
  updateSubCat,
};
