const Order = require('../schemas/orderSchema');
const queryHelper = require('../helpers/queryHelper');

const addOrder = function(req,res){
    let orderData = new Order();

    orderData.item = req.body.item;
    orderData.supplier = req.body.supplier;
    orderData.qty = req.body.qty;
    orderData.total = req.body.total;
    orderData.placedDate = req.body.placedDate;
    orderData.status = req.body.status;



    queryHelper.addRecord(orderData,function(err,resObj){
        if(err){
            console.log(err);
        }else{
            res.json(resObj);
        }
    })
    
}

module.exports = {
    addOrder:addOrder
}