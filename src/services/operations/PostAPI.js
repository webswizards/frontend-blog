import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { endpoints } from "../apis";
import {
  setLoading,
  setPosts,
  setTotalPages,
  setCurrentPage,
  setAllPosts,
} from "../../slices/postSlice";

const {
  CREATEAPI,
  EDITPOSTAPI,
  DELETEPOSTAPI,
  SHOWALLPOSTAPI,
  SHOWSINGLEPOSTAPI,
  SHOWALLPOSTDBAPI,
} = endpoints;

export function createPost(data, token) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");

    dispatch(setLoading(true));
    try {
 
      const response = await apiConnector(
        "POST",
        CREATEAPI,

        data,
        {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        }
      );

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("post added Successfully");
      // navigate("/");
    } catch (error) {

      toast.error("Failed To create category ");
    }
    toast.dismiss(toastId);
    dispatch(setLoading(false));
  };
}

export function editPost(data, token) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
   
    dispatch(setLoading(true));
    try {
     
      const response = await apiConnector(
        "put",
        EDITPOSTAPI,

        data,
        {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        }
      );
      

      

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("post added Successfully");
      // navigate("/");
    } catch (error) {
   
      toast.error("Failed To create category ");
    }
    toast.dismiss(toastId);
    dispatch(setLoading(false));
  };
}

export function deletePost(postId, token) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");

    dispatch(setLoading(true));
    try {
      

      const response = await apiConnector("POST", DELETEPOSTAPI, postId, {
        Authorization: `Bearer ${token}`,
      });
      

     

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("post added Successfully");
      // navigate("/");
    } catch (error) {
     
      toast.error("Failed To create category ");
    }
    toast.dismiss(toastId);
    dispatch(setLoading(false));
  };
}

export function showost(page) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector(
        "GET",
        `${SHOWALLPOSTAPI}?page=${page}`
      );
      dispatch(setPosts(response?.data?.posts));
      dispatch(setTotalPages(response?.data?.totalPages));
      dispatch(setCurrentPage(response?.data?.currentPage));

   
      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      // navigate("/");
    } catch (error) {
      toast.error("Failed To show post ");
    }
    dispatch(setLoading(false));
  };
}

export function showallpost() {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("GET", SHOWALLPOSTDBAPI);

      dispatch(setAllPosts(response?.data?.posts));

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      // navigate("/");
    } catch (error) {
      toast.error("Failed To show post ");
    }
    dispatch(setLoading(false));
  };
}
