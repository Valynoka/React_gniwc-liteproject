import axios from "axios";
const _ = require('lodash');

import { Category } from "./type";

const data: Array<Category> = [];

axios('http://jsonplaceholder.typicode.com/posts').then((res) =>{
    _.map(res.data, (item: Category) => {
        data.push(item)
    });
    const sortData: Array<Category> = _.sortBy(data, [(item: Category) => item.title])

    console.log(sortData)
    return sortData
});



