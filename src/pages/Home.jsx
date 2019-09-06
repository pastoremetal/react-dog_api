/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unescaped-entities */
// @flow
import React from "react";
import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  Box,
  FormControl,
  NativeSelect,
  FormHelperText,
  Avatar
} from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";
import Layout from "../components/Layout";
import { apiGetBreeds } from "./utils";
import { fetchBreeds, setSelectedBred } from "../redux/actions/breeds";
import {
  getBreeds,
  getSelectedBreed,
  getBreedImage
} from "../redux/selectors/breeds";
import defaultImage from "../static/anonymous.png";

type HomeProps = {
  breeds: Array<string>,
  searchImage?: string,
  onSetSelectedBreed: string
};

const StyledAvatar = styled(Avatar)`
  && {
    width: 8rem;
    height: 8rem;
    background-color: ${deepOrange[300]};
    margin: 0 auto;

    > img {
      color: papayawhip;
      object-fit: ${props =>
        props.src === defaultImage ? "contain" : "cover"};
    }
  }
`;

const Home = ({ breeds, searchImage, onSetSelectedBreed }: HomeProps) => (
  <Layout title="Choose your dogo">
    <Box display="flex" alignItems="center" flexWrap="wrap">
      <Box width={{ xs: 1, md: 1 / 2 }}>
        <FormControl fullWidth>
          <NativeSelect
            name="race"
            inputProps={{ "aria-label": "race" }}
            onChange={e => onSetSelectedBreed(e.target.value)}
          >
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
      <Box width={{ xs: 1, md: 1 / 2 }}>
        <StyledAvatar src={searchImage || defaultImage} />
      </Box>
    </Box>
  </Layout>
);

Home.defaultProps = {
  searchImage: defaultImage
};

const mapStateToProps = store => ({
  breeds: getBreeds(store),
  selectedBreed: getSelectedBreed(store),
  searchImage: getBreedImage(store)
});

const mapActions = {
  onFetchBreeds: fetchBreeds,
  onSetSelectedBreed: setSelectedBred
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
