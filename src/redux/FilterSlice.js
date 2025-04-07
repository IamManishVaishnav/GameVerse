import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCategories: [],
  selectedTags: [],
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleCategory: (state, action) => {
      const category = action.payload;
      if (state.selectedCategories.includes(category)) {
        state.selectedCategories = state.selectedCategories.filter(cat => cat !== category);
      } else {
        state.selectedCategories.push(category);
      }
    },
    toggleTag: (state, action) => {
      const tag = action.payload;
      if (state.selectedTags.includes(tag)) {
        state.selectedTags = state.selectedTags.filter(t => t !== tag);
      } else {
        state.selectedTags.push(tag);
      }
    },
    resetFilters: (state) => {
      state.selectedCategories = [];
      state.selectedTags = [];
    }
  }
});

export const { toggleCategory, toggleTag, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
