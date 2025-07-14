export const authActions = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};

export default function authReducer(state, action) {
  switch (action.type) {
    case authActions.LOGIN: {
      return { ...state, user: action.payload };
    }

    case authActions.LOGOUT: {
      return { ...state, user: null };
    }

    default:
      return state;
  }
}
