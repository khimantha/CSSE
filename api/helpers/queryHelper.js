const mongoose = require('mongoose');

const addRecord = function (updateObj, callback) {

    updateObj.save(function (err, obj) {
        if (err) {
            callback(err, null);
        } else {
            returnObj = {};
            returnObj.status = 200;
            returnObj.result = obj;

            callback(null, returnObj);
        }
    })
}

const getAllRecords = function (model, callback) {
    model.find({ isDelete: false }, function (err, obj) {
        if (err) {
            callback(err, null);
        } else {
            returnObj = {};
            returnObj.status = 200;
            returnObj.result = obj;

            callback(null, returnObj);
        }
    })
}

const findOneByID = function (model, id, callback) {
    let criteria = {};
    criteria._id = id;
    criteria.isDelete = false;

    model.findOne(criteria, function (err, obj) {
        if (err) {
            callback(err, null);
        } else {
            returnObj = {};
            returnObj.status = 200;
            returnObj.result = obj;

            callback(null, returnObj);
        }
    })
}


const deteteOneById = function (model, id, callback) {
    model.findByIdAndUpdate(id, { isDelete: true }, function (err, obj) {
        if (err) {
            callback(err, null);
        } else {
            returnObj = {};
            returnObj.status = 200;
            returnObj.result = obj;

            callback(null, returnObj);
        }
    })
}

const updateById = function (model, id, updateObj, callback) {
    model.findByIdAndUpdate(id, updateObj, function (err, obj) {
        if (err) {
            callback(err, null);
        } else {
            returnObj = {};
            returnObj.status = 200;
            returnObj.result = obj;

            callback(null, returnObj);
        }
    })
}

module.exports = {
    addRecord: addRecord,
    getAllRecords: getAllRecords,
    findOneByID: findOneByID,
    deteteOneById: deteteOneById,
    updateById: updateById
}