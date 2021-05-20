let categoryHandler = require('../DB/category');

// let categories = [{name: 'Safsdf', url: 'afsdfasdfas'}];

module.exports.index = async (req, res) => {
  console.log('Hello world');

  let categories = await categoryHandler.findAllCategory();
//   console.log(categories);

  res.render('index', {categories: categories});
};

module.exports.addCategory = async (req, res) => {
  console.log('add Cate');
  const {name, url} = req.body;
  console.log(name, url);
  let isCategory = await categoryHandler.findCategory(name);
  console.log(isCategory);
  if (isCategory) {
    res.redirect('/');
  } else {
    let data = {
      name: name,
      url: '/' + url.toLowerCase(),
    };
    let result = await categoryHandler.insertCategory(data);
    console.log(result);
    if (result.insertedCount) {
      console.log('Added');
    } else {
      console.log('something wrong');
    }
    res.redirect('/');
  }
};


