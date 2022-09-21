const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var dateTime = new Date();

// made slight change moncur
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