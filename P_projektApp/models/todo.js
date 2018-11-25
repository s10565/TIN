/*
What do we need
1. id - automatic
2. owner
3. task name
4. done/complited
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    done: {
      type: Boolean,
      required: true
    },
    owner: {
      type: String,
      required: true
    },
  }, {runSettersOnQuery: true}
);

var todo = mongoose.model('todo', todoSchema);
module.exports = todo;