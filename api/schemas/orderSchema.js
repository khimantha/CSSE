const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    item:{
        type: mongoose.Schema.Types.ObjectId, ref: 'Item',
        required:true
    },
    supplier:{
        type: mongoose.Schema.Types.ObjectId, ref: 'Supplier',
        required:true
    },
    qty:{
        type:Number,
        require:false,
        
    },total:{
        type:Number,
        require:false,
        
    },
    placedDate:{
        type:Date,
        require:false,
        
    },
    status:{
        type:String,
        enum:['Approved','Processing','Rejected'],
        required:true,
        default:'Processing'
    },
    isDelete:{
        type:Boolean,
        require:false,
        default:false
    }
})

module.exports = mongoose.model('Order',orderSchema);
