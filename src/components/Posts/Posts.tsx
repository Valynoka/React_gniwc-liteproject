import React, { useEffect, useState } from 'react';

import styles from './Posts.module.scss';
import { SerialApiDataTypes } from '../../models/SerialApiDataTypes';
import Post from '../Post';
import PostTable from '../PostTable';

type PostsProps = {
  data: Array<SerialApiDataTypes>,
  search?: string,
};

const Posts: React.FC<PostsProps> = (props) => {
  const { search = '', data } = props;
  // Хук для фильтрации. Добавляем array, чтобы значения хука получали только то, что
  // им передается из массива (мы явно задаем, что только определенный тип данных он будет получать)
  const [filtered, setFiltered] = useState<Array<SerialApiDataTypes>>([]);
  // Хук для того, чтобы менять формат вывода данных (таблица или список)
  const [view, setView] = useState('list');

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

  // switch (filtered){
  //   case display === 'line':
  //     return (
  //       <div className={styles.posts}>
  //         {/* Обработанный массив мы map-им в Post, где уже подготовили разметку */}
  //         {filtered
  //           ? filtered.map((post) => (<Post key={post.episode} {...post} />))
  //           : null }
  //       </div>
  //     )
  // }

  return (
    <div className={styles.posts}>
      {/* Делаем несколько кнопок используя наш useState, и в значении value прописываем или список, или таб. */}
      {/* после чего вешаем обработчик событий, чтобы setView следил за изменениями и передавал во view */}
      <button className={styles.button} type="button" value="list" onClick={() => setView('list')}>Список</button>
      <button className={styles.button} type="button" value="list" onClick={() => setView('table')}>Таблица</button>
      {/* Обработанный массив мы map-им в Post или PostTable, где уже подготовили разметку */}
      {filtered && view === 'list'
        ? filtered.map((post) => (<Post key={post.episode} {...post} />))
        : null }
      {filtered && view === 'table'
        ? filtered.map((post) => (<PostTable key={post.episode} {...post} />))
        : null }
    </div>
  );
};

export default Posts;
