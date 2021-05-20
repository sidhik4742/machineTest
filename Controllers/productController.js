// const { category } = require('../Constants/collections');
let categoryHandler = require('../DB/category');
let subCategoryHandler = require('../DB/subCategory');
let productHandler = require('../DB/product');

// let categories = [{name: 'Safsdf', url: 'afsdfasdfas'}];

module.exports.productIndex = async (req, res) => {
  console.log('Hello world');

  let categories = await categoryHandler.findAllCategory();
  let subCategories = await subCategoryHandler.findAllSubCategory();
  let products = await productHandler.findAllProduct();
  console.log(categories, subCategories);

  res.render('products', {
    categories: categories,
    subCategories: subCategories,
    products: products,
  });
};

module.exports.addProduct = async (req, res) => {
  console.log('add Cate');
  const {category, subcategory, product, price} = req.body;
  console.log(category, subcategory, product, price);
  let removeSpace = product.split(' ').join();
  let findedCategory = await categoryHandler.findCategory(category);
  let findedSubCategory = await subCategoryHandler.findSubCategory(subcategory);
  let isProduct = await productHandler.findProduct(product);
  console.log(isProduct);
  if (isProduct) {
    res.redirect('/product');
  } else {
    let data = {
      name: product,
      url: `${findedCategory.url}${
        findedSubCategory.url
      }/${removeSpace.toLowerCase()}`,
      price: price,
    };
    let result = await productHandler.insertProduct(data);
    console.log(result);
    if (result.insertedCount) {
      console.log('Added');
    } else {
      console.log('something wrong');
    }
    res.redirect('/product');
  }
};

module.exports.getProduct = async (req, res) => {
  console.log('get product');

  let params = req.params;

  console.log(params['0']);

  let result = await productHandler.getProduct(params['0']);

  console.log(result);
  res.render('product_view', {product: result});
};

module.exports.addMoreSubView = async (req, res) => {
  console.log('get product');

  let {id} = req.params;
  console.log(id);

  res.render('moreSubCat', {id: id});
};

module.exports.addMoresubCat = async (req, res) => {
  console.log('get product');
  let {id, subCat} = req.body;
  console.log(id, subCat);

  let result = await productHandler.updateProduct(id, subCat);
  res.redirect('/product');
};
