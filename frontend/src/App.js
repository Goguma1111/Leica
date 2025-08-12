import React, { memo } from 'react';


import {Route, Routes} from 'react-router-dom';
import GlobalStyle from './components/GlobalStyles';


import Main from './pages/Main';
import PopularProductsPage from './pages/PopularProductsPage';
import NewMember from './pages/NewMember';

const  App = memo(() => {
  return (
    <>
        <GlobalStyle />
        <h1>Leica</h1>
        <hr />


        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/popular-products" element={<PopularProductsPage />} />
          <Route path="/NewMember" element={<NewMember />} />
        </Routes>
    </>
  );
});

export default App;
