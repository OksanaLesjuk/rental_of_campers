import { createSlice } from "@reduxjs/toolkit";
import { getAdverts } from "./operations";

const handlePending = state => {
    state.isLoading = true;
};
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};
const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
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
            const { advert } = action.payload;

            const index = state.favorites.findIndex(item => item.id === advert.id);
            if (index === -1) {
                state.favorites.push(advert); // Додати новий об'єкт до масиву favorites
                state.adverts = state.adverts.map(ad => {
                    if (ad.id === advert.id) {
                        return { ...ad, isFavorite: true };
                    }
                    return ad;
                });
            } else {
                // Якщо об'єкт вже є у favorites, видалити його з масиву
                state.favorites = state.favorites.filter(item => item.id !== advert.id);
                state.adverts = state.adverts.map(ad => {
                    if (ad.id === advert.id) {
                        return { ...ad, isFavorite: false };
                    }
                    return ad;
                });
            }
            // Оновлення улюблених у localStorage
            localStorage.setItem('favorites', JSON.stringify(state.favorites));
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAdverts.fulfilled, (state, action) => {
                state.adverts = action.payload.map(ad => {
                    return { ...ad, isFavorite: state.favorites.some(fav => fav.id === ad.id) };
                });
                state.isLoading = false;
                state.error = null;
            })
            .addMatcher(action => action.type.endsWith('pending'), handlePending)
            .addMatcher(action => action.type.endsWith('rejected'), handleRejected)
    }
})

export const { toggleFavorite } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;