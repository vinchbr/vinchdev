import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { AdoptionQueue } from "../../types";

const initialState: AdoptionQueue[] = [];

export const adoptionQueueSlice = createSlice({
  name: "adoptionQueue",
  initialState,
  reducers: {
    addToAdoptionQueue: (state, action: PayloadAction<AdoptionQueue>) => {
      state.push(action.payload);
    },
    removeFromAdoptionQueue: (state, action: PayloadAction<AdoptionQueue>) => {
      state.filter((obj) => obj.id !== action.payload.id);
    },
    approveAdoption: (state, action: PayloadAction<AdoptionQueue>) => {
      const index = state.findIndex((obj) => obj.id === action.payload.id);
      state[index].status = action.payload.status;
    },
  },
});

export const { addToAdoptionQueue, removeFromAdoptionQueue, approveAdoption } =
  adoptionQueueSlice.actions;

export const adoptionQueueStatus = (state: RootState) => state.adoption;

export default adoptionQueueSlice.reducer;
