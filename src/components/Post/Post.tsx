import React from 'react';

import styles from './Post.module.scss';
import { SerialApiDataTypes } from '../../models/SerialApiDataTypes';

const Post: React.FC<SerialApiDataTypes> = (props) => {
  const { episode, title } = props;
  return (
    <div className={styles.post}>
      <h1 className={styles.post__title}>{episode}</h1>
      <p className={styles.post__title}>{title}</p>
    </div>
  );
};

export default Post;
