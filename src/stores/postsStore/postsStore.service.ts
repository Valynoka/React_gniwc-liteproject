import axios from 'axios';
import { toJS } from 'mobx';

import { SerialApiDataTypes } from '../../models/SerialApiDataTypes';

const baseApiUrl = 'https://www.breakingbadapi.com/api/episodes';

const service = {
  getSomeData(): Promise<SerialApiDataTypes[]> {
    return axios.get(`${baseApiUrl}`).then((response) => toJS(response.data));
  },
};

export default service;
