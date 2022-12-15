const initialState = {
  saving: false,
  logginIn: false,
  fireBaseError: null,
  token: null,
  userId: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_USER_START":
      return {
        ...state,
        saving: true,
      };
    case "SIGNUP_USER_ERROR":
      return {
        ...state,
        saving: false,
        fireBaseError: action.error.response.data.error.message,
      };
    case "SIGNUP_USER_SUCCESS":
      return {
        ...state,
        saving: false,
        token: action.token,
        userId: action.userId,
      };
    case "LOGIN_USER_START":
      return {
        ...state,
        logginIn: true,
      };

    case "LOGIN_USER_ERROR":
      return {
        ...state,
        logginIn: false,
        fireBaseError: action.error.response.data.error.message,
      };

    case "LOGIN_USER_SUCCESS":
      return {
        ...state,
        logginIn: false,
        token: action.token,
        userId: action.userId,
      };
    case "LOG_OUT":
      return {
        ...state,
        token: null,
        userId: null,
        fireBaseError: null,
      };
    default:
      return state;
  }
};

export default reducer;
