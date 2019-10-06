const mongoose = require('mongoose');

const supplierSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:false
    },
    account:{
        type:String,
        required:false
    },
    isDelete:{
        type:Boolean,
        require:false,
        default:false
    }
})

module.exports = mongoose.model('Supplier',supplierSchema);
