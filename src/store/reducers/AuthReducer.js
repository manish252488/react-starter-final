import { SET_USER, SIGN_OUT } from "../actions/actionTypes";

const initialState = {
  user: {
    name: "john doe",
    email: "some@domain.com",
  },
  token: "wertyui4567890jdhasdfu8cn489c439c83c",
  isAuthenticated: false,
  role: "guest",
};
function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        role: action.payload.role,
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
