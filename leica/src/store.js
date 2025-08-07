import { configureStore } from '@reduxjs/toolkit';

import TitanicSlice from './slices/TitanicSlice';

const store = configureStore({
  reducer: {
    TitanicSlice
  },
});

export default store;
