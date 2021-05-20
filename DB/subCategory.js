const ObjectId = require("mongodb").ObjectID
const {getConnection} = require('../config/config');
const COLLECTION = require('../Constants/collections');


module.exports.findAllSubCategory = () => {
    return new Promise(async (resolve, reject) => {
    //   console.log(category);
      try {
          const db = await getConnection();
          const collection = db.collection(COLLECTION.sub_category)
        //console.log(collection,"collection");
          const response =await collection.find().toArray();
        //   console.log(response,"res");
            resolve(response)
    } catch (error) {
          reject(error)
      }
    });
  }

module.exports.findSubCategory = (category) => {
    return new Promise(async (resolve, reject) => {
      console.log(category);
      try {
          const db = await getConnection();
          const collection = db.collection(COLLECTION.sub_category)
        //console.log(collection,"collection");
          const response =await collection.findOne({"name":category });
          console.log(response,"res");
            resolve(response)
    } catch (error) {
          reject(error)
      }
    });
  }


  module.exports.insertSubCategory =  (data)=> {
    return new Promise(async(resolve, reject) => {
        try {   
            console.log(data)  
            const db = await getConnection()
            const collection = db.collection(COLLECTION.sub_category)
            const response = await collection.insertOne(data)
            return resolve(response)  
        } catch (error) {
            reject(error)
        }
    })
    
}