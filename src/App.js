import React, { memo } from 'react';


import {Route, Routes} from 'react-router-dom';
import GlobalStyle from './components/GlobalStyles';


import Main from './pages/Main';
import Dashboard from './pages/Dashboard';
import PopularProductsPage from './pages/PopularProductsPage';

const  App = memo(() => {
  return (
    <>
        <GlobalStyle />
        <h1>Leica</h1>
        <hr />


        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/popular-products" element={<PopularProductsPage />} />
        </Routes>
    </>
  );
});

export default App;
