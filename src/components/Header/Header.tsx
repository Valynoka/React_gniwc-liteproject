import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Header.module.scss';

const Header: React.FC = () => (
  <header className={classes.header}>
    <nav className={classes.header__navigation}>
      <Link className={classes.header__link} to="/">
        <button type="button" className={classes.header__button}>Главная</button>
      </Link>
      <Link className={classes.header__link} to="InfoPage">
        <button type="button" className={classes.header__button}>О сериале</button>
      </Link>
    </nav>

  </header>
);

export default Header;
