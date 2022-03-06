import React from 'react';
import { Link } from 'react-router-dom';

import classes from './StartPage.module.scss';
import GiftSvg from '../ui/Svg/StartPageSvg';

const StartPage: React.FC = () => (
  <div className={classes.startPage}>
    <h1 className={classes.startPage__title}>
      Мы рады Вам!
    </h1>
    <p className={classes.startPage__subtitle}>
      И у нас для вас есть
      <Link className={classes.startPage__subtitle_link} to="FunnyPage">
        <GiftSvg id="svg" />
      </Link>
    </p>
  </div>
);

export default StartPage;
