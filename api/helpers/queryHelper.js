const mongoose = require('mongoose');

const addRecord = function(updateObj,callback){

    updateObj.save(function(err,obj){
        if(err){
            callback(err,null);
        }else{
            returnObj = {};
            returnObj.status = 200;
            returnObj.result = obj;
            
            callback(null, returnObj);
        }
    })
}

module.exports = {
    addRecord:addRecord
}