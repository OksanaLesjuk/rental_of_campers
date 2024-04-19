import { createSlice } from "@reduxjs/toolkit";
import { getAdverts } from "./operations";

const handlePending = state => {
    state.isLoading = true;
};
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const advertsSlice = createSlice({
    name: 'adverts',
    initialState: {
        adverts: [],
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAdverts.fulfilled, (state, action) => {
                state.adverts = action.payload;
                state.isLoading = false;
                state.error = null;
            })
            .addMatcher(action => action.type.endsWith('pending'), handlePending)
            .addMatcher(action => action.type.endsWith('rejected'), handleRejected)
    }
})


export const advertsReducer = advertsSlice.reducer;