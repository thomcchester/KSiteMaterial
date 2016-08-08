var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// TODO enter min and max values.

var Default_Values = new Schema({


      TopHeaderText: {type: String},
  
});

module.exports = mongoose.model("Default_Values", Default_Values);
