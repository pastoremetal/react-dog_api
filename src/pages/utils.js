/* eslint-disable import/prefer-default-export */
// import { fetchBreeds } from "../redux/actions/breeds";

const axios = require("axios");

export const apiGetBreeds = () =>
  axios.get("https://dog.ceo/api/breeds/list/all");
