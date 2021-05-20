const ObjectId = require('mongodb').ObjectID;
const {getConnection} = require('../config/config');
const COLLECTION = require('../Constants/collections');

module.exports.findAllProduct = (category) => {
  return new Promise(async (resolve, reject) => {
    //   console.log(category);
    try {
      const db = await getConnection();
      const collection = db.collection(COLLECTION.product);
      //console.log(collection,"collection");
      const response = await collection.find().toArray();
      //   console.log(response,"res");
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports.findProduct = (product) => {
  return new Promise(async (resolve, reject) => {
    console.log(product);
    try {
      const db = await getConnection();
      const collection = db.collection(COLLECTION.product);
      //console.log(collection,"collection");
      const response = await collection.findOne({name: product});
      console.log(response, 'res');
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports.insertProduct = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(data);
      const db = await getConnection();
      const collection = db.collection(COLLECTION.product);
      const response = await collection.insertOne(data);
      return resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports.getProduct = (product) => {
  return new Promise(async (resolve, reject) => {
    console.log(product);
    try {
      const db = await getConnection();
      const collection = db.collection(COLLECTION.product);
      //console.log(collection,"collection");
      const response = await collection.findOne({url: product});
      console.log(response, 'res');
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports.updateProduct = (id, subCat) => {
  return new Promise(async (resolve, reject) => {
    try {
      const db = await getConnection();
      const collection = db.collection(COLLECTION.product);
      //console.log(collection,"collection");
      const response = await collection.findOne({_id: ObjectId(id)});
      console.log(response, 'res');

      var newUrl = response.url.split('/');
      newUrl.splice(newUrl.length - 1, 0, subCat);
      newUrl = newUrl.join('/');
      console.log(newUrl);
      const result = await collection.findOneAndUpdate(
        {_id: ObjectId(id)},
        {$set: {url: newUrl}}
      );
      console.log(result, 'res');
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
