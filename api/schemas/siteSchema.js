const mongoose = require('mongoose');

const siteSchema = mongoose.Schema({
    location:{
        type:String,
        required:true
    },
    isDelete:{
        type:Boolean,
        require:false,
        default:false
    }
})

module.exports = mongoose.model('Site',siteSchema);
