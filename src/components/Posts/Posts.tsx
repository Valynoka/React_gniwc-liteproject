import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './Posts.module.scss';
import { SerialApiDataTypes } from '../../models/SerialApiDataTypes';
import PostList from '../PostList';
import PostTable from '../PostTable';

export type PostsProps = {
  data: Array<SerialApiDataTypes>,
  search?: string,
};

const Posts: React.FC<PostsProps> = (props) => {
  const { search = '', data } = props;

  // Хук для фильтрации. Добавляем array, чтобы значения хука получали только то, что
  // им передается из массива (мы явно задаем, что только определенный тип данных он будет получать)
  const [filtered, setFiltered] = useState<Array<SerialApiDataTypes>>(data);

  // Хук для того, чтобы менять формат вывода данных (таблица или список)
  const { view = 'list' } = useParams();

  // Чтобы у нас не было перезагрузки во время фильтрации, мы обернем наш массив в useEffect
  useEffect(() => {
    // Задаем как будет вестись поиск
    if (search.length > 2) {
      // ищем в массиве слово, которое в нем должно содержаться, предварительно формат. к ниж. регистру
      const filteredData = data.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()));
      setFiltered(filteredData);
    } else {
      // Выводит данные
      setFiltered(data);
    }
  }, [data, search]);

  if (view === 'list') {
    return (
      <div className={styles.list}>
        {filtered.map((post) => (
          <PostList key={post.episode_id} {...post} />
        ))}
      </div>
    );
  }
  if (view === 'table') {
    return (
      <div className={styles.table}>
        {filtered.map((post) => (
          <PostTable key={post.episode_id} {...post} />
        ))}
      </div>
    );
  }
  if (view === 'graph') {
    return <div>To be develop!</div>;
  }
  return null;
};

export default Posts;
