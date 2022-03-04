import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { SerialApiDataTypes } from '../../models/SerialApiDataTypes';
import Posts from '../Posts';
import Error from '../Error';
import Loading from '../Loading';
import Search from '../Search';

const App: React.FC = () => {
  // Хук для загрузки данных с апи
  const [post, setPost] = useState<Array<SerialApiDataTypes>>([]);
  // Хук для вывода ошибки. Может быть или true || false
  const [error, setError] = useState(false);
  // Хук для вывода ошибки
  const [loading, setLoading] = useState(false);
  // Хук для поиска
  const [search, setSearch] = useState('');

  // Загружаем данные useEffect позволяет устранить перезагрузку
  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (event) => setSearch(event.target.value);
  // Хук для кнопки, которая будет выводить нам доп. данные. Станет невидимой, когда
  // будет виден весь массив.
  const [visible, setVisible] = useState<SerialApiDataTypes[]>(post.slice(0, 3));
  // Функция, выводящая по 3 слова. Ее вешаем на кнопку
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => setVisible(post.slice(0, visible.length + 3));

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
    return <Error />;
  }

  return (
    <div>
      {loading
        ? <Loading />
        : (
          <>
            <Search search={search} handleSearch={handleSearch} />
            <Posts data={visible} search={search} filteredResult="" />
          </>
        )}
      {
        visible && (visible.length < post.length && <button type="button" onClick={handleClick}>Показать еще</button>)
      }
    </div>
  );
};

export default App;
