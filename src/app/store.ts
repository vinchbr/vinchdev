import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import navbarReducer from "../features/navbar/navbarSlice";
import listMenuReducer from "../features/listMenu/listMenuSlice";
import { catApi } from "../services/cats";

export const reducers = {
  navbar: navbarReducer,
  listMenu: listMenuReducer,
  [catApi.reducerPath]: catApi.reducer,
};
export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
