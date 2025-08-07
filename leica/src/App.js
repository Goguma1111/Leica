import React, { memo } from 'react';


import {Route, Routes} from 'react-router-dom';
import GlobalStyle from './components/GlobalStyles';


import Main from './pages/Main';

const  App = memo(() => {
  return (
    <>
        <GlobalStyle />
        <h1>Leica</h1>
        <hr />


        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
    </>
  );
});

export default App;
