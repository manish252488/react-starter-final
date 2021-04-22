import * as Actions from "../actions/actionTypes";

const initialState = {
  data: [],
};
function filesReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.SET_FILES:
      return {
        ...state,
        data: action.payload,
      };
    case Actions.CLEAR_FILES:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
export default filesReducer;
