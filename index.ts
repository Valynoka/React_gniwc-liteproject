import axios from "axios";
const _ = require('lodash');

import { Categories } from "./type";

const data: Categories[] = [];

axios('http://jsonplaceholder.typicode.com/posts').then((res) =>{
    _.map(res.data, (item) => {
        data.push(item)
    });
    const sortData: Categories[] = _.sortBy(data, [(item) => item.title])

    console.log(sortData)
    return sortData
});



