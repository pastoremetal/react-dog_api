/* eslint-disable import/prefer-default-export */
import { FETCH_BREEDS } from "../actionTypes";

export const fetchBreeds = breeds => ({
  type: FETCH_BREEDS,
  breeds
});
