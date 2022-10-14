//// Navbar.js reducer
import { createSlice } from '@reduxjs/toolkit';

let savedPage = JSON.parse(sessionStorage.getItem('SAVE_PAGE'));

if (savedPage === null) {
    savedPage = 'home'
}

const initialStateValue = { page: savedPage };

// handles actions related to the navbar
export const navbarSlice = createSlice({
    name: 'navbarState',
    initialState: {
        value: initialStateValue
    },
    reducers: {
        goToPage: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { goToPage } = navbarSlice.actions;

export default navbarSlice.reducer;