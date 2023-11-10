import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { endpoints } from "../apis";
import {
  setLoading,
  setAllcategories,
  setpageCategories,
  setTotalPages,
  setCurrentPage,
  setSeoCategories
} from "../../slices/categorySlice";

const {
  CREATECATEGORY_API,
  SHOWCATEGORY_API,
  SHOWPAGECATEGORY_API,
  SINGLECATEGORY_API,
} = endpoints;

export function createCategory(name, description, token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", CREATECATEGORY_API, {
        name,
        description,
        token,
      });

      console.log("RESETPASSWORD RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("category added Successfully");
      navigate("/");
    } catch (error) {
      console.log("category ERROR............", error);
      toast.error("Failed To create category ");
    }
    toast.dismiss(toastId);
    dispatch(setLoading(false));
  };
}

export function showCategory() {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("GET", SHOWCATEGORY_API);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("category fetched Successfully");
    } catch (error) {
      console.log("category fetched ERROR............", error);
      toast.error("Failed To fetched category ");
    }
    toast.dismiss(toastId);
    dispatch(setLoading(false));
  };
}

export function showpagepost(page, name) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector(
        "POST",
        `${SHOWPAGECATEGORY_API}?page=${page}`,
        name
      );
      dispatch(setpageCategories(response?.data?.data?.posts));
      dispatch(setTotalPages(response?.data?.data?.totalPages));
      dispatch(setCurrentPage(response?.data?.data?.currentPage));
      dispatch(setSeoCategories(response?.data?.data?.category))
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

export function showallpost(name) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", SINGLECATEGORY_API, name);
      dispatch(setAllcategories(response?.data?.data?.posts));

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
    } catch (error) {
      toast.error("Failed To show post ");
    }
    dispatch(setLoading(false));
  };
}
