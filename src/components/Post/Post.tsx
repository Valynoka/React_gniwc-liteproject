import React from 'react';

import { SerialDataType } from '../../models/serialDataType';

const Post: React.FC<SerialDataType> = (props) => (
  <div>
    <h1>{props.episode_id}</h1>
    <p>{props.title}</p>
  </div>
);

export default Post;
