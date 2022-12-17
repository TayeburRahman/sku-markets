import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from 'features/auth/authSlice';
import messageSlice from 'features/message/messageSlice';
import storage from 'redux-persist/lib/storage';
import ApiBase from './ApiBase';

import pricingSlice from 'features/pricing/pricingSlice';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist';

const rootReducer = combineReducers({
    user: authSlice,
    message: messageSlice,
    pricing: pricingSlice,
    [ApiBase.reducerPath]: ApiBase.reducer,
});

const persistConfig = {
    key: 'sku-markets',
    version: 1,
    storage,
    whitelist: ['user', 'address', 'auth', 'degree', 'contact', 'menu'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(ApiBase.middleware),
    devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
