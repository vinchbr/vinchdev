import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface NavbarState {
    activeItem: 'home' | 'adoption' | 'admin' | 'contact' | null;
}

const initialState: NavbarState = {
    activeItem: 'home'
}

export const navbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        setActive: (state, action: PayloadAction<'home' | 'adoption' | 'admin' | 'contact' | null>) => {
            state.activeItem = action.payload
        }
    }
})

export const { setActive } = navbarSlice.actions

export const navbarActiveState = (state: RootState) => state.navbar.activeItem

export default navbarSlice.reducer
