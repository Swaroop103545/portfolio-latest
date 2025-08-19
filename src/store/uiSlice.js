import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: true,
  isMenuOpen: false,
  currentSection: 'home',
  isLoading: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setCurrentSection: (state, action) => {
      state.currentSection = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { toggleDarkMode, toggleMenu, setCurrentSection, setLoading } = uiSlice.actions;
export default uiSlice.reducer; 