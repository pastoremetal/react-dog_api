/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unescaped-entities */
// @flow
import React from "react";
import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";
import {
  Box,
  FormControl,
  NativeSelect,
  FormHelperText
} from "@material-ui/core";
import Layout from "../components/Layout";
import { apiGetBreeds } from "./utils";
import { fetchBreeds } from "../redux/actions/breeds";
import { getBreeds } from "../redux/selectors/breeds";

type HomeProps = {
  breeds: Array<string>
};

const Home = ({ breeds }: HomeProps) => (
  <Layout title="Choose your dogo">
    <Box width={{ xs: 1, md: 1 / 2 }}>
      <FormControl fullWidth>
        <NativeSelect name="race" inputProps={{ "aria-label": "race" }}>
          <option value="Selecione">Select Dogo's breed</option>
          {breeds &&
            breeds.map((breed, index) => (
              <option key={index} value={breed}>
                {breed}
              </option>
            ))}
        </NativeSelect>
        <FormHelperText>Dogo's breed</FormHelperText>
      </FormControl>
    </Box>
  </Layout>
);

const mapStateToProps = store => ({
  breeds: getBreeds(store)
});

const mapActions = {
  onFetchBreeds: fetchBreeds
};

export default compose(
  connect(
    mapStateToProps,
    mapActions
  ),
  lifecycle({
    componentDidMount() {
      apiGetBreeds().then(response => {
        this.props.onFetchBreeds(Object.keys(response.data.message));
      });
    }
  })
)(Home);
