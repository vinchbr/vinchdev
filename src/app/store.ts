import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import navbarReducer from "../features/navbar/navbarSlice";
import breedMenuReducer from "../features/breedMenu/breedMenuSlice";
import { catApi } from "../services/cats";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    navbar: navbarReducer,
    breedMenu: breedMenuReducer,
    [catApi.reducerPath]: catApi.reducer,
  },
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
