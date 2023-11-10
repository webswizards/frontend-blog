import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null,
  allcategories: [],
  pageCategories: [],
  categoriesSeo:[],
  totalPages: null,
  currentPage: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    setAllcategories(state, action) {
      state.allcategories = action.payload;
    },
    setpageCategories(state, action) {
      state.pageCategories = action.payload;
    },
    setSeoCategories(state, action) {
      state.categoriesSeo = action.payload;
    },
    setTotalPages(state, action) {
      state.totalPages = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { setLoading, setToken, setAllcategories, setpageCategories, setTotalPages, setCurrentPage,setSeoCategories } = categorySlice.actions;

export default categorySlice.reducer;
