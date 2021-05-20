let subCategoryHandler = require('../DB/subCategory');

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


