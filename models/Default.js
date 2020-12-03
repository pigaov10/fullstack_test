const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DefaultSchema = new Schema({
  client:{
    type: String,
    required: true
  },
  value:{
    type: Number,
    required: true
  },
  since: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('default', DefaultSchema);