const queryHelper = require('../helpers/queryHelper');
const waterfall = require('async-waterfall');
const Employee = require('../schemas/employeeSchema');
const bcrypt = require('bcrypt');

resOb = {};
const login = function (req, res) {

    waterfall([

        function (callback) {
            queryHelper.findOneCriteria(Employee, { email: req.body.email }, function (err, resObj) {
                if (!err) {
                    callback(null, resObj.result);
                } else {

                    callback(err, null);
                    this.resOb.IsAuthenticated = false;
                    this.resOb.Message = "User Not Found";
                }
            })
        },
        function (userData, callback) {
            bcrypt.compare(req.body.password, userData.password, function (err, res) {
                if (!err) {
                    callback(null, userData, res);
                } else {
                    callback(err, null);
                }
            });
        }
    ], function (err, userData, result) {
        if (err) {
            res.json(err);
            this.resOb.IsAuthenticated = fales;
            this.resOb.Message = "Error" + err;
        } else {
            if (result) {

                this.resOb.IsAuthenticated = result;
                this.resOb.user = userData._id;
                this.resOb.Message = "Successfully Logged In";
                //    res.json("Authenticated");
            } else {
                this.resOb.IsAuthenticated = result;
                this.resOb.Message = "Incorrect Password";
                //    res.json("Incorrect Password");
            }
        }
        res.json(this.resOb);
    })

}

module.exports = {
    login: login
}