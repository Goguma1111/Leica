/**
 * ReduxHelper를 작업하면서 반복되는 중복코드 모듈화
 */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import fetchHelper from './FetchHelper'; // FetchHelper를 가져옵니다.

// 리덕스가 로딩상태를 관리하는 상태값을 생성하는 함수
const pending = (state, {meta, payload}) => {
    return {...state, loading: true};
};

// 리덕스가 성공 상태를 관리하는 상태값을 생성하는 함수
const fulfilled = (state, {meta, payload}) => {
    return {...payload, loading: false};
};

// 리덕스가 실패 상태를 관리하는 상태값을 생성하는 함수
const rejected = (state, {meta, payload}) => {
    return {...state,
        loading: false,
        status: payload.status || 0,
        message: payload.message || 'Unknown Error'

    };

};


const reduxHelper = {
    // 리덕스 Slice 객체 생성 함수
    getDefaultSlice: (sliceName, extraReducers = [], callback = {}, reducers = {}) => {
        return createSlice({
            name: sliceName,
            initialState: {
                // 백엔드에서 내려주는 데이터 구조와 동일
                status: 200,
                message: "OK",
                item: null,
                timestamp: null,
                loading: false,
        },
            reducers: reducers,
            extraReducers: (builder) => {
                extraReducers.forEach((v,i) => {
                   builder.addCase(v.pending, pending);
                    builder.addCase(v.fulfilled, callback[v.fulfilled] || fulfilled);
                    builder.addCase(v.rejected, rejected);
                });
            },
        });
    },



    get: (alias, url, callback = (payload) => { return { url: url, params: payload }; }) => {
        return createAsyncThunk(alias, async (payload, { rejectWithValue }) => {
            let result = null;
            const { url, params } = callback(payload);

            try {
                result = await fetchHelper.get(url, params);
            } catch (err) {
                console.group("[ReduxHelper.get] Redux Action Error");
                console.error(err);
                console.groupEnd();
                result = rejectWithValue(err);
            }
            return result;
        });
    },
    post: (alias, url, callback = (payload) => { return { url: url, params: payload }; }) => {
        return createAsyncThunk(alias, async (payload, { rejectWithValue }) => {
            let result = null;
            const { url, params } = callback(payload);

            try {
                result = await fetchHelper.post(url, params);
            } catch (err) {
                console.group("[ReduxHelper.post] Redux Action Error");
                console.error(err);
                console.groupEnd();
                result = rejectWithValue(err);
            }
            return result;
        });

    },


    put: (alias, url, callback = (payload) => { return { url: url, params: payload }; }) => {
        return createAsyncThunk(alias, async (payload, { rejectWithValue }) => {
            let result = null;
            const { url, params } = callback(payload);

            try {
                result = await fetchHelper.put(url, params);
            } catch (err) {
                console.group("[ReduxHelper.put] Redux Action Error");
                console.error(err);
                console.groupEnd();
                result = rejectWithValue(err);
            }
            return result;
        });
    },


    delete: (alias, url, callback = (payload) => { return { url: url, params: payload }; }) => {
        return createAsyncThunk(alias, async (payload, { rejectWithValue }) => {
            let result = null;
            const { url, params } = callback(payload);

            try {
                result = await fetchHelper.delete(url, params);
            } catch (err) {
                console.group("[ReduxHelper.delete] Redux Action Error");
                console.error(err);
                console.groupEnd();
                result = rejectWithValue(err);
            }
            return result;
        });

    },


};

export default reduxHelper;
