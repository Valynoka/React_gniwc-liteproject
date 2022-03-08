import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link, Outlet } from 'react-router-dom';

import classes from './Posts.module.scss';
import Search from '../Search';
import { SerialApiDataTypes } from '../../models/SerialApiDataTypes';
import postsStore from '../../stores/postsStore';
import Error from '../Error';
import Loading from '../Loading';

const Posts: React.FC<SerialApiDataTypes> = observer(() => {
  const { searchValue, status } = postsStore;

  if (status === 'loading') {
    return <Loading />;
  }

  if (status === 'error') {
    return <Error />;
  }

  return (
    <div className={classes.posts__wrapper}>
      <h2 className={classes.posts__title}>Тут могла быть Ваша реклама)))</h2>
      <Search search={searchValue} />
      <div className={classes.posts__links_block}>
        <Link to="PostList">
          <button className={classes.button} type="button">Список</button>
        </Link>
        <Link to="PostTable">
          <button className={classes.button} type="button">Таблица</button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
});
export default Posts;
