import { SET_USER, SIGN_OUT } from "../actions/actionTypes";

const initialState = {
  user: {},
  token: "",
  isAuthenticated: false  ,
  role: "guest",
};
function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token? action.payload.token : state.token,
        isAuthenticated: true,
        role: action.payload.user.roleId,
      };
    case SIGN_OUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
export default AuthReducer;
