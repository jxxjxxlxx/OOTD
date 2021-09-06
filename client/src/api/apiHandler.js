import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true, // Cookie is sent to client when using this service. (used for session)
});

function errorHandler(error) {
  if (error.response.data) {
    console.log(error.response && error.response.data);
    throw error;
  }
  throw error;
}

const apiHandler = {
  service,

  signup(userInfo) {
    return service
      .post("/api/auth/signup", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  signin(userInfo) {
    return service
      .post("/api/auth/signin", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  isLoggedIn() {
    return service
      .get("/api/users/me")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  logout() {
    return service
      .get("/api/auth/signout")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getUser(){
    return service
    .get("/api/users/me")
    .then((res)=> res.data)
    .catch(errorHandler);
  },

  getUserInfos(){
    return service
    .get("/api/users/me")
    .then((res)=> res.data)
    .catch(errorHandler)
  },

  getUserCoolPosts() {
    return service
    //check  if backend route is ok. apiHandler to enable user to view his/her own posts
      .get("/api/users/me/coolposts")
      .then((res) => res.data)
      .catch(errorHandler);
  },
  
  getUserHelpPosts() {
    return service
    .get("/api/users/me/helpposts")
    .then((res)=>res.data)
    .catch(errorHandler)
  }

};

export default apiHandler;
