/* eslint-disable import/prefer-default-export */
import {
  FETCH_BREEDS,
  FETCH_BREED_IMAGE,
  SET_SELECTED_BREED
} from "../actionTypes";

const axios = require("axios");

export const fetchBreeds = breeds => ({
  type: FETCH_BREEDS,
  breeds
});

export const setSelectedBred = breed => dispatch => {
  axios.get(`https://dog.ceo/api/breed/${breed}/images`).then(response =>
    dispatch({
      type: FETCH_BREED_IMAGE,
      breedImage: response.data.message[0]
    })
  );
  return dispatch({
    type: SET_SELECTED_BREED,
    breed
  });
};
