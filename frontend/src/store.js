import { configureStore } from '@reduxjs/toolkit';

import LeicaSlice from './slices/LeicaSlice';

const store = configureStore({
  reducer: {
    LeicaSlice
  },
});

export default store;
