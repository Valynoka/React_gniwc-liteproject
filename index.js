"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var _ = require('lodash');
var data = [];
(0, axios_1["default"])('http://jsonplaceholder.typicode.com/posts').then(function (res) {
    _.map(res.data, function (item) {
        data.push(item);
    });
    var sortData = _.sortBy(data, [function (item) { return item.title; }]);
    console.log(sortData);
    return sortData;
});
