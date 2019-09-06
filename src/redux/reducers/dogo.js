import * as ActionTypes from "../actionTypes";

const initialState = {
  breeds: [],
  breedImage: null,
  breed: null,
  list: []
};

const dogo = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_BREEDS:
      return {
        ...state,
        breeds: action.breeds
      };
    case ActionTypes.FETCH_BREED_IMAGE:
      return {
        ...state,
        breedImage: action.breedImage
      };
    case ActionTypes.SET_SELECTED_BREED:
      return {
        ...state,
        breed: action.breed
      };
    case ActionTypes.SET_NAME:
      return {
        ...state,
        name: action.name
      };
    case ActionTypes.ADD_TO_LIST:
      return {
        ...state,
        list: [...state.list, ...action.list]
      };
    default:
      return state;
  }
};

export default dogo;
