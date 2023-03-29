import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import navbarReducer from "../features/navbar/navbarSlice";
import listMenuReducer from "../features/listMenu/listMenuSlice";
import adoptionQueueReducer from "../features/adoptionQueue/adoptionQueueSlice";
import { catApi } from "../services/cats";

export const reducers = {
  counter: counterReducer,
  navbar: navbarReducer,
  listMenu: listMenuReducer,
  adoption: adoptionQueueReducer,
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
