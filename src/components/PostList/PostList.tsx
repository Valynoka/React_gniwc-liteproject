import React from 'react';

import classes from './PostList.module.scss';
import { SerialApiDataTypes } from '../../models/SerialApiDataTypes';

const PostList: React.FC<SerialApiDataTypes> = (props) => {
  const { episode, title } = props;
  return (
    <ul className={classes.postList}>
      <li className={classes.postList__item}>
        <h1 className={classes.postList__title}>{episode}</h1>
        <p className={classes.postList__subtitle}>{title}</p>
      </li>
    </ul>
  );
};

export default PostList;
