const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    supplier:{
        type: mongoose.Schema.Types.ObjectId, ref: 'Supplier',
        required:true
    },
    price:{
        type: Number,
        required:true
    },
    isDelete:{
        type:Boolean,
        require:false,
        default:false
    }
})

module.exports = mongoose.model('Item',itemSchema);
