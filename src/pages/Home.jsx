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
  TextField,
  Avatar,
  Typography,
  Button
} from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";
import Layout from "../components/Layout";
import { apiGetBreeds } from "./utils";
import * as Actions from "../redux/actions/dogo";
import {
  getBreeds,
  getSelectedBreed,
  getBreedImage,
  getName,
  getList
} from "../redux/selectors/dogo";
import defaultImage from "../static/anonymous.png";
import CardList from "../components/CardList";

type HomeProps = {
  breeds: Array<string>,
  selectedBreed?: string,
  searchImage?: string,
  onSetSelectedBreed: string => void,
  name: string,
  onSetName: string => void,
  onSubmit: (string, string, string) => void,
  list: Array<Object>
};

const StyledAvatar = styled(Avatar)`
  && {
    width: 12rem;
    height: 12rem;
    background-color: ${deepOrange[300]};
    margin: 0 auto;
    margin-top: 2rem;

    > img {
      object-fit: ${props =>
        props.src === defaultImage ? "contain" : "cover"};
    }
  }
`;

const StyledTypography = styled(Typography)`
  position: absolute;
  width: 100%;
  top: 75%;
`;

const Home = ({
  breeds,
  selectedBreed,
  searchImage,
  onSetSelectedBreed,
  name,
  onSetName,
  onSubmit,
  list
}: HomeProps) => (
  <Layout title="Choose your dogo">
    <Box display="flex" alignItems="center" flexWrap="wrap">
      <Box width={{ xs: 1, md: 1 / 2 }}>
        <FormControl fullWidth>
          <FormHelperText>Dogo's breed</FormHelperText>
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
        </FormControl>
        {selectedBreed && (
          <TextField
            length="20"
            fullWidth
            label="Dogo's name"
            margin="normal"
            onChange={e => onSetName(e.target.value)}
            inputProps={{ maxLength: 10 }}
          />
        )}
      </Box>
      <Box position="relative" width={{ xs: 1, md: 1 / 2 }}>
        <StyledAvatar src={searchImage || defaultImage} />
        <StyledTypography
          variant="h5"
          color="error"
          component="p"
          align="center"
        >
          {name || ""}
        </StyledTypography>
      </Box>
    </Box>
    {selectedBreed && name && (
      <Box
        mt={{ xs: "2rem", md: "0" }}
        textAlign={{ xs: "center", md: "left" }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => onSubmit(name, selectedBreed, searchImage)}
        >
          Salvar
        </Button>
      </Box>
    )}
    {list.length > 0 && <CardList list={list} />}
  </Layout>
);

Home.defaultProps = {
  selectedBreed: null,
  searchImage: defaultImage
};

const mapStateToProps = store => ({
  breeds: getBreeds(store),
  selectedBreed: getSelectedBreed(store),
  searchImage: getBreedImage(store),
  name: getName(store),
  list: getList(store)
});

const mapActions = {
  onFetchBreeds: Actions.fetchBreeds,
  onSetSelectedBreed: Actions.setSelectedBred,
  onSetName: Actions.setName,
  onSubmit: Actions.addToList
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
