/* eslint-disable react/no-array-index-key */
import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import styled from "styled-components";

const StyledBox = styled(Box)`
  && {
    box-sizing: border-box;
    > div {
      > div {
        > div:first-child {
          height: 12rem;
        }
      }
    }
  }
`;

const CardList = ({ list }: { list: Array<Object> }) => (
  <Box width="1" mt="2rem" display="flex" alignItems="center" flexWrap="wrap">
    {list.map((dogo, index) => (
      <StyledBox
        p="0.85rem"
        key={index}
        width={{ xs: 1, md: 1 / 4 }}
        flexShrink="1"
      >
        <Card component="div">
          <CardActionArea component="div">
            <CardMedia image={dogo.image} />
            <CardContent>
              <Typography display="inline" variant="h6">
                {`${dogo.name}: `}
              </Typography>
              <Typography display="inline" variant="subtitle1">
                {dogo.breed}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </StyledBox>
    ))}
  </Box>
);

export default CardList;
