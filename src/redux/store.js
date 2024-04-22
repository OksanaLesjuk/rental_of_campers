// import { configureStore } from "@reduxjs/toolkit";
// import { advertsReducer } from "./advertsSlice";

// export const store = configureStore({
//     reducer: {
//         adverts: advertsReducer,

//     },
// });

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { advertsReducer } from "./advertsSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

// Конфігурація для зберігання в локальному сховищі
const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ["adverts"], // Зберігаємо тільки стан `adverts`
};

// Кореневий reducer
const rootReducer = combineReducers({
    adverts: advertsReducer,
});

// Застосовуємо персистентну конфігурацію до кореневого reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Створюємо та експортуємо стор


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
// Створюємо та експортуємо персистентний стор
export const persistor = persistStore(store);