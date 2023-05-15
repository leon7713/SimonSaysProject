import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'

import { createStore } from "redux";
import reducer from './reducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)