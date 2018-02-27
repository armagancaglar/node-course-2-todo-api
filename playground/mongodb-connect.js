//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);
//

// //ES6 destructıring
// var user = {name: 'andrew', age: 25};
// //User objesinin içindeki name'i name değişkenine atar
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if(error){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');
  //
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  // db.collection('Users').insertOne({
  //   name: 'Armagan',
  //   age: 24,
  //   location: 'Istanbul'
  // }, (err, result) => {
  //   if(err){
  //   return console.log('Unable to insert user', err);
  // }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
  // });
  client.close();
});
