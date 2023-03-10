import axios from "axios";
export const signupUser = (email, password) => {
  return function (dispatch) {
    dispatch(signupUserStart());
    const data = {
      email,
      password,
      returnSecureToken: true,
    };
    axios
      .post(
        " https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBfPe8D9btBhcHTbFOywGi1uAzMtem1Vug",
        data
      )
      .then((result) => {
        const token = result.data.idToken;
        const userId = result.data.localId;
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        dispatch(signupUserSuccess(token, userId));
      })
      .catch((err) => {
        dispatch(signupUserError(err));
      });
  };
};
export const signupUserStart = () => {
  return {
    type: "SIGNUP_USER_START",
  };
};
export const signupUserSuccess = (token, userId) => {
  return {
    type: "SIGNUP_USER_SUCCESS",
    token,
    userId,
  };
};
export const signupUserError = (error) => {
  return {
    type: "SIGNUP_USER_ERROR",
    error,
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  // localStorage.removeItem("expireDate");
  // localStorage.removeItem("refreshToken");
  return {
    type: "LOG_OUT",
  };
};
// export const autoLogout = (ms) => {
//   return function (dispacth) {
//     setTimeout(() => {
//       dispacth(logout());
//     }, ms);
//   };
// };
