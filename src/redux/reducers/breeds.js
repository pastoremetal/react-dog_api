import {
  FETCH_BREEDS,
  FETCH_BREED_IMAGE,
  SET_SELECTED_BREED
} from "../actionTypes";

const initialState = {
  breeds: [],
  breedImage: null,
  breed: null
};

const breeds = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BREEDS:
      return {
        ...state,
        breeds: action.breeds
      };
    case FETCH_BREED_IMAGE:
      return {
        ...state,
        breedImage: action.breedImage
      };
    case SET_SELECTED_BREED:
      return {
        ...state,
        breed: action.breed
      };
    default:
      return state;
  }
};

export default breeds;
