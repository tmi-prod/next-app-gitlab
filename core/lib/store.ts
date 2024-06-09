import { combineReducers, configureStore } from '@reduxjs/toolkit';
import hereMapSlice from '../../core/lib/features/hereMap/hereMapSlice';


export const makeStore:any = () => {
    return configureStore({
        reducer: {
            Map:hereMapSlice
        },
        devTools: process.env.NODE_ENV !== 'production',
    })
  }


// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']




