const queryHelper = require('../helpers/queryHelper');
const waterfall = require('async-waterfall');
const Employee = require('../schemas/employeeSchema');
const bcrypt = require('bcrypt');

const login = function(req,res){
   waterfall([
       function(callback){
           queryHelper.findOneCriteria(Employee,{email:req.body.email},function(err,resObj){
               if(!err){
                   callback(null,resObj.result);
               }else{
                   callback(err,null);
               }
           })
       },
       function(userData,callback){
        bcrypt.compare(req.body.password, userData.password, function(err, res) {
            if(!err){
                callback(null,res);
            }else{
                callback(err,null);
            }
        });
       }
   ],function(err,result){
       if(err){
           res.json(err);
       }else{
           if(result){
               res.json("Authenticated");
           }else{
               res.json("Incorrect Password");
           }
       }
   })
    
}

module.exports = {
    login:login}