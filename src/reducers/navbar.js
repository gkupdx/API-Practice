//// Navbar.js reducer
import { createSlice } from '@reduxjs/toolkit';

// handles actions related to the navbar
export const navbarSlice = createSlice({
    name: "navbarState",
    initialState: {
        value: {
            currPage: "home"
        }
    },
    reducers: {
        goToPage: (state, action) => {
            state.value = action.payload;
        },
    },
});

export default navbarSlice.reducer;