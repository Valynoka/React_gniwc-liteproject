import React from 'react';

import styles from './Error.module.scss';

const Error: React.FC = () => (
  <div className={styles.error}>
    Упс! Загрузка не удалась.
  </div>
);

export default Error;
