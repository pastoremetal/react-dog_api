import { FETCH_BREEDS } from "../actionTypes";

const initialState = {
  breeds: []
};

const breeds = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BREEDS:
      return {
        ...state,
        breeds: action.breeds
      };
    default:
      return state;
  }
};

export default breeds;
