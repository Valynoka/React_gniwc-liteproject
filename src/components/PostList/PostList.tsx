import React from 'react';
import { observer } from 'mobx-react-lite';

import classes from './PostList.module.scss';
import { SerialApiDataTypes } from '../../models/SerialApiDataTypes';
import postsStore from '../../stores/postsStore';

const PostList: React.FC<SerialApiDataTypes> = observer(() => {
  const { filteredPosts, setShowMore, setShowLess } = postsStore;
  return (
    <div>
      <ul className={classes.postList}>
        {filteredPosts.map((post) => (
          <li className={classes.postList__item} key={post.episode_id}>
            <h3 className={classes.postList__title}>{post.episode}</h3>
            <p className={classes.postList__subtitle}>{post.title}</p>
          </li>
        ))}
      </ul>
      <div className={classes.postTable__button_wrapper}>
        <button className={classes.button} type="button" onClick={() => setShowMore()}>Показать еще</button>
        <button className={classes.button} type="button" onClick={() => setShowLess()}>Удалить</button>
      </div>
    </div>
  );
});

export default PostList;
