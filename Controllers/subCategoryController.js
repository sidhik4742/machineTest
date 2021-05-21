let subCategoryHandler = require('../DB/subCategory');
let productHandler = require("../DB/product")

// let categories = [{name: 'Safsdf', url: 'afsdfasdfas'}];

module.exports.subCategoryIndex = async (req, res) => {
  console.log('Sub category');

  let categories = await subCategoryHandler.findAllSubCategory();
//   console.log(categories);

  res.render('subCat', {categories: categories});
};

module.exports.addSubCategory = async (req, res) => {
  console.log('add Cate');
  const {name, url} = req.body;
  console.log(name, url);
  let isCategory = await subCategoryHandler.findSubCategory(name);
  console.log(isCategory);
  if (isCategory) {
    res.redirect('/subcategory');
  } else {
    let data = {
      name: name,
      url: '/' + url.toLowerCase(),
    };
    let result = await subCategoryHandler.insertSubCategory(data);
    console.log(result);
    if (result.insertedCount) {
      console.log('Added');
    } else {
      console.log('something wrong');
    }
    res.redirect('/subcategory');
  }
};

module.exports.updateSubCatView = async (req, res) => {
    console.log('update category view');
  
    let id = req.params.id;
  
    console.log(id);
  
    // let categories = await categoryHandler.findAllCategory();
    //   console.log(categories);
  
    res.render('updateSubCat', {id: id});
  };
  
  module.exports.updateSubCat = async (req, res) => {
    console.log('update category');
  
    let {id, category} = req.body;
  
    console.log(id, category);
    category = category.toLowerCase();
  
    await subCategoryHandler.updateSubCat(id, category);
    await productHandler.updateSubCatFromProduct(id, category);
  
    // console.log();
  
    res.redirect('/subcategory');
  };
  


