import { COUNTER_ADD, COUNTER_SUBTRACT } from "../actions/action_types";

const initialState = {
  INITIALIZING: true,
  count: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_ADD:
      return {
        ...state,
        count: state.count + 1
      };

    case COUNTER_SUBTRACT:
      return {
        ...state,
        count: state.count - 1
      };

    default:
      return state;
  }
};

export default counterReducer;