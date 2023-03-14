import { createSlice } from '@reduxjs/toolkit';

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    selectedGenre: 'ALL'
  },
  reducers: {
    filteredGenre: (state, action) => {
        state.selectedGenre = action.payload;
    },
  },
});

export const getSelectedGenre = state => state.books.selectedGenre;

export const { filteredGenre } = booksSlice.actions;

export default booksSlice.reducer;

