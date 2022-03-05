import React from 'react';
import {
  Outlet, Route, Routes, BrowserRouter as Router,
} from 'react-router-dom';

import Header from '../Header';
import StartPage from '../StartPage';
import InfoPage from '../InfoPage';
import PageForFun from '../PageForFun';

const App: React.FC = () => {
  // return (
  //   <Router>
  //     <Header/>
  //     <Routes>
  //       <Route path="/" element={<StartPage/>}/>
  //       <Route path="/StartPage" element={<StartPage/>}/>
  //       <Route path="/InfoPage" element={<InfoPage/>}>
  //         <Route path="/InfoPage/:view" element={<InfoPage/>}/>
  //       </Route>
  //       <Route path="/FunnyPage" element={<PageForFun message={''} image={''}/>}/>
  //     </Routes>
  //   </Router>
  // )

  function Layout() {
    return (
      <div className="App">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<StartPage />} />
          <Route path="InfoPage" element={<InfoPage />}>
            <Route path="InfoPage/:view" element={<InfoPage />} />
          </Route>
          <Route path="FunnyPage" element={<PageForFun message="" image="" />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
