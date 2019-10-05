const mongoose = require('mongoose');
const siteSchema = require('./siteSchema')


const employeeSchema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:false
    },
    phone:{
        type:Number,
        required:true
    },
    dob:{
        type:Date,
        required:false
    },
    joinDate:{
        type:Date,
        required:true
    },
    role:{
        type:String,
        enum:['SiteM','Accountant','Manager','Employee','ProcOfficer'],
        required:true,
        default:'Employee'
    },
    workingHours:{
        type:Number,
        required:false
    },
    site: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Site',
        require:false
    },
    password:{
        type:String,
        required:true
    },

    isDelete:{
        type:Boolean,
        require:false,
        default:false
    }
})

module.exports = mongoose.model('Employee',employeeSchema);
