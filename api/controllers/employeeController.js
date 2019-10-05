const Employee = require('../schemas/employeeSchema');
const queryHelper = require('../helpers/queryHelper');
var bcrypt = require('bcrypt');
const config = require('../config/config');

const addEmployee = function (req, res) {
    let empData = new Employee();

    bcrypt.hash(req.body.password,config.saltRounds, function (err, hash) {
        if (!err) {
            empData.firstName = req.body.firstName;
            empData.lastName = req.body.lastName;
            empData.address = req.body.address;
            empData.firstName = req.body.firstName;
            empData.phone = req.body.phone;
            empData.dob = req.body.dob;
            empData.joinDate = req.body.joinDate;
            empData.role = req.body.role;
            empData.workingHours = req.body.workingHours;
            empData.site = req.body.site;
            empData.email = req.body.email;
            empData.password = hash;

            queryHelper.addRecord(empData, function (err, resObj) {
                if (err) {
                    console.log(err);
                } else {
                    res.json(resObj);
                }
            })
        
        }else{
            res.json(err);
        }
    });

    // empData.firstName = req.body.firstName;
    // empData.lastName = req.body.lastName;
    // empData.address = req.body.address;
    // empData.firstName = req.body.firstName;
    // empData.phone = req.body.phone;
    // empData.dob = req.body.dob;
    // empData.joinDate = req.body.joinDate;
    // empData.role = req.body.role;
    // empData.workingHours = req.body.workingHours;
    // empData.site = req.body.site;



    // queryHelper.addRecord(empData, function (err, resObj) {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         res.json(resObj);
    //     }
    // })

}

module.exports = {
    addEmployee: addEmployee
}