/* eslint-disable import/prefer-default-export */
import * as ActionTypes from "../actionTypes";

const axios = require("axios");

export const fetchBreeds = breeds => ({
  type: ActionTypes.FETCH_BREEDS,
  breeds
});

export const setSelectedBred = breed => dispatch => {
  axios.get(`https://dog.ceo/api/breed/${breed}/images`).then(response =>
    dispatch({
      type: ActionTypes.FETCH_BREED_IMAGE,
      breedImage: response.data.message[0]
    })
  );
  return dispatch({
    type: ActionTypes.SET_SELECTED_BREED,
    breed
  });
};

export const setName = name => ({
  type: ActionTypes.SET_NAME,
  name
});

export const addToList = (name, breed, image) => ({
  type: ActionTypes.ADD_TO_LIST,
  list: [{ name, breed, image }]
});
