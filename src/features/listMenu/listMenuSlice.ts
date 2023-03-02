import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface BreedMenuState {
  activeItem: string;
}

const initialState: BreedMenuState = {
  activeItem: "all",
};

export const listMenuSlice = createSlice({
  name: "listMenu",
  initialState,
  reducers: {
    setListMenuActive: (state, action: PayloadAction<string>) => {
      state.activeItem = action.payload;
    },
  },
});

export const { setListMenuActive } = listMenuSlice.actions;

export const listMenuActiveState = (state: RootState) =>
  state.listMenu.activeItem;

export default listMenuSlice.reducer;
