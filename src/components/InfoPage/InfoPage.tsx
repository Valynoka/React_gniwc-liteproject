import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import classes from './InfoPage.module.scss';
import { SerialApiDataTypes } from '../../models/SerialApiDataTypes';
import Loading from '../Loading';
import Search from '../Search';
import Posts from '../Posts';
import Error from '../Error';

const InfoPage: React.FC = () => {
  // Хук для загрузки данных с апи
  const [post, setPost] = useState<SerialApiDataTypes[]>([]);
  // Хук для вывода ошибки. Может быть или true || false
  const [error, setError] = useState(false);
  // Хук для вывода ошибки
  const [loading, setLoading] = useState(false);
  // Хук для поиска
  const [search, setSearch] = useState('');

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (event) => setSearch(event.target.value);
  // Хук для кнопки, которая будет выводить нам доп. данные. Станет невидимой, когда
  // будет виден весь массив.
  const [visible, setVisible] = useState<SerialApiDataTypes[]>(post.slice(0, 3));
  // Функция, выводящая по 3 слова. Ее вешаем на кнопку
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => setVisible(post.slice(0, visible.length + 3));
  // Загружаем данные useEffect позволяет устранить перезагрузку
  useEffect(() => {
    axios.get('https://www.breakingbadapi.com/api/episodes')
      .then((response) => {
        setPost(response.data);
        setVisible(response.data.slice(0, 3));
        setError(false);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  if (error) {
    return (
      <Error />
    );
  }

  return (
    <div className={classes.infoPage__wrapper}>
      <div className={classes.infoPage__title}>Могла быть Ваша реклама</div>
      {loading
        ? <Loading />
        : (
          <>
            <Search search={classes.search} handleSearch={handleSearch} />
            <div>
              <ul className={classes.infoPage__list}>
                <li>
                  <Link className={classes.infoPage__link} to="InfoPage/list">
                    <button className={classes.button} type="button">Список</button>
                  </Link>
                </li>
                <li>
                  <Link className={classes.infoPage__link} to="InfoPage/table">
                    <button className={classes.button} type="button">Таблица</button>
                  </Link>
                </li>
              </ul>
              <Posts data={visible} search={search} />
            </div>
          </>
        )}
      {
        visible && (visible.length < post.length && <button className={classes.button} type="button" onClick={handleClick}>Показать еще</button>)
      }
    </div>
  );
};

export default InfoPage;
