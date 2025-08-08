/**
 * 리액트의 전체 페이지를 구성하는 컴포넌트
 */
/** 리액트 기본 패키지 참조 (모든 파일에서 무조건 참조한다.) */
import React, { memo } from "react";
/* 링크와 페이지 구성에 필요한 컴포넌트 참조 */
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";

/** 하위 페이지를 담당하는 컴포넌트(직접제작)를 참조 */
import Main from './pages/Main';

const App = memo(() => {
    return (
        <>
            <GlobalStyles />
            <h1>Leica</h1>

            {/* ---- 페이지 역할을 할 컴포넌트를 명시하기 --- */}
            <Routes>
                <Route path="/Main" element={<Main />} />
            </Routes>
        </>
    );
});

export default App;
