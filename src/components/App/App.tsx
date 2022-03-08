import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import Header from '../Header';
import StartPage from '../StartPage';
import PageForFun from '../PageForFun';
import Posts from '../Posts';
import PostList from '../PostList';
import PostTable from '../PostTable';

const App: React.FC = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="Posts/*" element={<Posts episode_id={0} title="" season="" air_date="" characters={[]} episode="" series="" />}>
        <Route path="PostList" element={<PostList episode_id={0} title="" season="" air_date="" characters={[]} episode="" series="" />} />
        <Route path="PostTable" element={<PostTable episode_id={0} title="" season="" air_date="" characters={[]} episode="" series="" />} />
      </Route>
      <Route path="FunnyPage" element={<PageForFun message="" image="" />} />
    </Routes>
  </Router>
);

export default App;
