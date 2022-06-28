import createSagaMiddleware from '@redux-saga/core';
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import appbarReducer from 'src/components/appBarSlice';
import authReducer from 'src/features/auth/authSlice';
import rootSaga from './rootSaga';

//saga
const sagaMiddleware = createSagaMiddleware();

//persist
const persistConfig = {
  key: 'admin-icx',
  version: 1,
  storage,
  whitelist: ['appbar'],
  blacklist: ['auth'],
};

const authPersistConfig = {
  key: 'admin-icx-auth',
  storage: storage,
  blacklist: ['loading'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  appbar: appbarReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
