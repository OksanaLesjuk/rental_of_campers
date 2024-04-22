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
        favorites: [],

        isLoading: false,
        error: null,
    },
    reducers: {
        toggleFavorite: (state, action) => {
            const advertId = action.payload;
            const index = state.favorites.findIndex(id => id === advertId);
            if (index === -1) {
                state.favorites.push(advertId);
            } else {
                state.favorites = state.favorites.filter(id => id !== advertId);
            }
        },
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

export const { toggleFavorite } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;