import { TOGGLE_THEME } from "./Constants";

const initialState = {
  theme: true,
};

const LayoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, theme: !state.theme };
    default:
      return state;
  }
};
export default LayoutReducer;
