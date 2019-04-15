import * as actions from "./../actions/index";

const resourceReducer = (state = [], action) => {
  switch (action.type) {
    case actions.FETCH_RESOURCE: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
};

export default resourceReducer;
