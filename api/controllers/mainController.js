const User = require('../schemas/testSchema');
const queryHelper = require('../helpers/queryHelper');

const testRoute = function(req,res){
    let userdata = new User();

    userdata.name = req.body.name;
    userdata.age = req.body.age;

    queryHelper.addRecord(userdata,function(err,resObj){
        if(err){
            console.log(err);
        }else{
            res.json(resObj);
        }
    })
    
}

module.exports = {
    testRoute:testRoute
}