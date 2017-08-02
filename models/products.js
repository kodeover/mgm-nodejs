//================ MAIN PRODUCTS MODEL ======================


/*require mongoose*/
var mongoose = require('mongoose');


/*create new schema*/
var Schema = mongoose.Schema;



/*add the schema for dishes*/
var ProductSchema = new Schema({
    modelId: {
        type: String,
        required: true,
        unique: true
    },

    category: {
        type: String,
        required: true
    },
    label: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        required: true
    },
    dimensions :{
        type: Array,
        require: true
    },
    motto: {
        type: String,
        required: true
    }
});

// the schema is useless so far
// we need to create a model using it

var Products = mongoose.model('Product', ProductSchema);

//make this avaible to our Node app
module.exports = Products;
