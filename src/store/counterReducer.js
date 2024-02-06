import { DECREASE_COUNTER, INCREASE_COUNTER } from "./counterAction";

const counterInitialState = {
  count: 0,
};

export const counterReducer = (state = counterInitialState, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREASE_COUNTER:
      
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
