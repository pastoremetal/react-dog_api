/* eslint-disable import/prefer-default-export */
const axios = require("axios");

export const apiGetBreeds = () =>
  axios.get("https://dog.ceo/api/breeds/list/all");
