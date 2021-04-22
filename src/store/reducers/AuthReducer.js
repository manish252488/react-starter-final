import {
  SET_USER,
  SIGN_OUT,
  SET_MAIL_ACCOUNT,
  REMOVE_MAIL_ACCOUNT,
} from "../actions/actionTypes";

const initialState = {
  user: {},
  token: "",
  isAuthenticated: false,
  role: "guest",
  mailAccount: {},
};
function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token ? action.payload.token : state.token,
        isAuthenticated: true,
        role: action.payload.user.roleId,
      };
    case SIGN_OUT:
      return {
        ...initialState,
      };
    case SET_MAIL_ACCOUNT:
      return {
        ...state,
        mailAccount: action.payload,
      };
    case REMOVE_MAIL_ACCOUNT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
export default AuthReducer;
