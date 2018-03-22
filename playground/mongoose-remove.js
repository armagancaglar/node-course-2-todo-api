const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({_id: '5ab3f981dabd05b4a175b632'}).then((todo) => {
//   console.log(todo);
// });

Todo.findByIdAndRemove('5ab3f981dabd05b4a175b632').then((todo) => {
  console.log(todo);
});
