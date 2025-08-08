/**
 * src/store.js
 *
 * Redux Store 설정 파일
 *
 * Redux Store는 애플리케이션의 상태를 관리하는 중앙 저장소 역할을 한다.
 * 이 파일에서는 Redux Toolkit을 사용하여 Store를 설정한다.
 *
 * --> yarn add @reduxjs/toolkit react-redux redux-devtools-extension
 */

import { configureStore } from "@reduxjs/toolkit";

import LeicaSlice from "./slices/LeicaSlice";

const store = configureStore({
    //리듀서 설정 --> Slice 객체들을 나열하여 설정
    //Slice ==> 백엔드와 통신하는 비동기 처리를 수행하는 객체
    //          백엔드 URL 1개당 파일 하나씩 생성
    reducer: {
        LeicaSlice
    }
});

export default store;