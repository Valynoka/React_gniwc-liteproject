import React from 'react';

import styles from './Post.module.scss';
import { SerialApiDataTypes } from '../../models/SerialApiDataTypes';

const Post: React.FC<SerialApiDataTypes> = (props) => {
  const { episode, title } = props;
  return (
    <ul className={styles.post}>
      <li className={styles.post__item}>
        <h1 className={styles.post__title}>{episode}</h1>
        <p className={styles.post__subtitle}>{title}</p>
      </li>
    </ul>

  );
};

export default Post;
