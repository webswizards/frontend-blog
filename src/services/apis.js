export const BASE_URL = "https://blogbackend-1psn.onrender.com/api";
// export const BASE_URL = "http://localhost:3000/api";

export const APP_URL = "https://webswizards.in";


// AUTH ENDPOINTS
export const endpoints = {
  SIGNUP_API: BASE_URL + "/signup",
  LOGIN_API: BASE_URL + "/login",
  RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",

  //category api
  CREATECATEGORY_API: BASE_URL + "/createcategory",
  SHOWCATEGORY_API: BASE_URL + "/showallcategory",
  SINGLECATEGORY_API: BASE_URL + "/showsinglecategory",
  SHOWPAGECATEGORY_API: BASE_URL + "/showpaginationcategory",

  //post api
  CREATEAPI: BASE_URL + "/createpost",
  EDITPOSTAPI: BASE_URL + "/editpost",
  DELETEPOSTAPI: BASE_URL + "/deletepost",
  SHOWALLPOSTAPI: BASE_URL + "/showallpost",
  SHOWSINGLEPOSTAPI: BASE_URL + "/showsinglepost",
  SHOWALLPOSTDBAPI: BASE_URL + "/showallpostall",

  

  

}

