import axios from "axios";

const authentication = {
  Auth() {
    return axios({
      method: "GET",
      url: "http://localhost:3000/auth",
      withCredentials: true
    })
  },
  Login(data){
    return axios({
      method: "POST",
      url: "http://localhost:3000/login",
      headers: {
        "Content-Type": "application/json"
      },
      data: data,
      withCredentials: true
    })
  }
};

export default authentication;
