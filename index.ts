import _ = require("lodash");

import {DataByYear, District, FederalDistricts, Regions, Report} from './type'

const geo: District[] = require('./geo.json');
const incomings: DataByYear[] = require('./incomnigs.json');

const federalDistricts: FederalDistricts = {};
_.map(geo,(item) => {
    federalDistricts[item.code] = item.caption
});

const regions: Regions = {};
_.map(geo, (item) => {
    _.map(item.regions, (reg) => {
        regions[reg.code] = reg.caption
    })
});

const report2020: Report = {};
_.map(incomings, (year) => {
    _.map(year.regions, (reg) => {
        const nameOfRegion = regions[reg.code]
        report2020[nameOfRegion] = reg.value
    })
});


console.log(federalDistricts);
console.log(regions);
console.log(report2020);





