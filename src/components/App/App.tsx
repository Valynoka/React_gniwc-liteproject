import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import Header from '../Header';
import classes from './App.module.scss';
import StartPage from '../StartPage';
import InfoPage from '../InfoPage';
import PageForFun from '../PageForFun';

const App: React.FC = () => {
  function Layout() {
    return (
      <div className="App">
        <Header />
        <main className={classes.content}>
          <Outlet />
        </main>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<StartPage />} />
        <Route path="InfoPage/*" element={<InfoPage />}>
          <Route path="InfoPage/:view" element={<InfoPage />} />
        </Route>
        <Route path="FunnyPage" element={<PageForFun message="" image="" />} />
      </Route>
    </Routes>
  );
};

export default App;
