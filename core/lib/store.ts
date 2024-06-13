import { combineReducers, configureStore } from '@reduxjs/toolkit';
import hereMapSlice from '../../core/lib/features/hereMap/hereMapSlice';
import { ProviderProps, TypedUseSelectorHook, UseDispatch, useDispatch, useSelector, useStore, UseStore } from 'react-redux';


export const NextStore :any= () => {
    return configureStore({
        reducer: {
            Map:hereMapSlice
        },
        devTools: process.env.NODE_ENV !== 'production',
    })
  }


// Infer the type of makeStore
export type AppStore = ReturnType<typeof NextStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof NextStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof NextStore.dispatch


export default NextStore;


