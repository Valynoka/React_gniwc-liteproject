import React, { useEffect, useState } from 'react';
import axios from 'axios';

import styles from './PageForFun.module.scss';
import Error from '../Error';
import Loading from '../Loading';

type PageForFunProps = {
  message: string,
  image: string;
};

const PageForFun: React.FC<PageForFunProps> = () => {
  const [image, getImage] = useState('');
  const [error, setError] = useState(false);
  // Хук для вывода ошибки
  const [loading, setLoading] = useState(false);
  const apiUrl = 'https://dog.ceo/api/breeds/image/random/1';

  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      getImage(response.data.message);
      setLoading(false);
    })
      .catch(() => {
        setError(true);
      });
  }, []);

  // не знал, как сделать так, чтобы по клику на кнопку менялась картинка, пришлось сделать так
  const getPost = () => {
    axios.get(apiUrl).then((response) => {
      getImage(response.data.message);
    })
      .catch(() => {
        setError(true);
      });
  };

  if (error) {
    return <Error />;
  }

  return (
    <div>
      {loading
        ? <Loading />
        : (
          <div className={styles.funnyPage}>
            <h2 className={styles.funnyPage__title}>Собакены всегда приносят в нашу жизнь радость))</h2>
            <button className={styles.funnyPage__button} type="button" onClick={getPost}>Показать еще</button>
            <img className={styles.funnyPage__img} src={image} alt="dogs" />
          </div>
        )}
    </div>
  );
};

export default PageForFun;
