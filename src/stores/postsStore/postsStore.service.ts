import axios from 'axios';

import { SerialApiDataTypes } from '../../models/SerialApiDataTypes';

const baseApiUrl = 'https://www.breakingbadapi.com/api/episodes';

const service = {
  getSomeData(): Promise<SerialApiDataTypes[]> {
    return axios.get(`${baseApiUrl}`).then((response) => response.data);
  },
};

export default service;
