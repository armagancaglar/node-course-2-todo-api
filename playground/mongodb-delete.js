//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if(error){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');
// deleteMany

//deleteOne

  // db.collection('Todos').deleteMany({
  //   text: 'Eat lunch'
  // }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({
  //   text: 'Eat lunch'
  // }).then((result) => {
  //   console.log(result);
  // })

  // db.collection('Todos').findOneAndDelete({
  //   completed: false
  // }).then((result) => {
  //   console.log(result);
  // })

  //db.collection('Users').deleteMany({name: 'Armagan'});

  db.collection('Users').findOneAndDelete({_id: new ObjectID("5a959c3de83c4d250e65b61b")}).then((results) =>{
    console.log(JSON.stringify(results, undefined, 2));
  })
  client.close();
});
