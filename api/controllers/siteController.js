const Site = require('../schemas/siteSchema');
const queryHelper = require('../helpers/queryHelper');

const addSite = function(req,res){
    let siteData = new Site();

    siteData.location = req.body.location;
    

    queryHelper.addRecord(siteData,function(err,resObj){
        if(err){
            console.log(err);
        }else{
            res.json(resObj);
        }
    })
    
}

module.exports = {
    addSite:addSite
}