const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var dateTime = new Date();

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;
var articleSchemaful = new Schema({
    name: {
        type: String,
        required: true,
    }, 
    description: {
        type: String,
        required: true
    },

}, {
    timestamps: true
});
var articles = mongoose.model('Article', articleSchemaful);
module.exports = articles;