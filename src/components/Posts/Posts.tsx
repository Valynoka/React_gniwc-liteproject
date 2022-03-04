import React, { useEffect, useState } from 'react';

import styles from './Posts.module.scss';
import { SerialApiDataTypes } from '../../models/SerialApiDataTypes';
import Post from '../Post';

type PostsProps = {
  data: Array<SerialApiDataTypes>,
  search?: string,
};

const Posts: React.FC<PostsProps> = (props) => {
  const { search = '', data } = props;
  // Хук для фильтрации. Добавляем array, чтобы значения хука получали только то, что
  // им передается из массива (мы явно задаем, что только определенный тип данных он будет получать)
  const [filtered, setFiltered] = useState<Array<SerialApiDataTypes>>([]);

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

  return (
    <div className={styles.posts}>
      {/* Обработанный массив мы map-им в Post, где уже подготовили разметку */}
      {filtered
        ? filtered.map((post) => (<Post key={post.episode} {...post} />))
        : null }
    </div>
  );
};

export default Posts;
