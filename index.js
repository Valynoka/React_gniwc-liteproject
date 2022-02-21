"use strict";
exports.__esModule = true;
var _ = require("lodash");
var geo = require('./geo.json');
var incomings = require('./incomnigs.json');
var federalDistricts = {};
_.map(geo, function (item) {
    federalDistricts[item.code] = item.caption;
});
var regions = {};
_.map(geo, function (item) {
    _.map(item.regions, function (reg) {
        regions[reg.code] = reg.caption;
    });
});
var report2020 = {};
_.map(incomings, function (year) {
    _.map(year.regions, function (reg) {
        var nameOfRegion = regions[reg.code];
        report2020[nameOfRegion] = reg.value;
    });
});
console.log(federalDistricts);
console.log(regions);
console.log(report2020);
