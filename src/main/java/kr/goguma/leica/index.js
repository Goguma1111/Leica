/**
 * React 프로그램의 시작점
 * --> "/src/App.js"의 실행결과를 "/public/index.html" 파일의 #root에 렌더링한다.ㅏ
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//URL에 의한 페이지 분할(Routing) 처리를 위해 참조하는 컴포넌트
import { BrowserRouter } from 'react-router-dom';

//리덕스 구성을 위한 참조
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
<BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
    </Provider>
);
