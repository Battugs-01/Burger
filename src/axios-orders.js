import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-test-cb01f-default-rtdb.firebaseio.com/",
});

export default instance;
