import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface BreedMenuState {
  activeItem: string;
}

const initialState: BreedMenuState = {
  activeItem: "all",
};

export const breedMenuSlice = createSlice({
  name: "breedMenu",
  initialState,
  reducers: {
    setBreedMenuActive: (state, action: PayloadAction<string>) => {
      state.activeItem = action.payload;
    },
  },
});

export const { setBreedMenuActive } = breedMenuSlice.actions;

export const breedMenuActiveState = (state: RootState) =>
  state.breedMenu.activeItem;

export default breedMenuSlice.reducer;
