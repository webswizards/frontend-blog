import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  posts:[],
  allposts:[],
  totalPages: null,
  currentPage: null,
};

const postSlice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {
    setLoading(state, value) {
      state.loading = value.payload;
    },
    setPosts(state, value) {
      state.posts = value.payload;
    },
    setAllPosts(state, value) {
      state.allposts = value.payload;
    },
    setTotalPages(state, value) {
      state.totalPages = value.payload;
    },
    setCurrentPage(state, value) {
      state.currentPage = value.payload;
    },
  },
});

export const { setLoading, setPosts, setTotalPages, setCurrentPage, setAllPosts } = postSlice.actions;

export default postSlice.reducer;
