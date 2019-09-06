// @flow
import React, { type Node } from "react";
import styled from "styled-components";
import { Container, Typography, Box } from "@material-ui/core";
import Header from "../Header";

const StyledLayout = styled.div`
  min-height: "100vh";
  width: "100%";
`;

const StyledContainer = styled(Container)`
  margin-top: 2rem;
`;

type LayoutPropTypes = {
  children: Node,
  title?: string
};

const Layout = ({ children, title }: LayoutPropTypes) => (
  <StyledLayout>
    <Header />
    <StyledContainer>
      {title && (
        <Box my="1.5rem" maxWidth={{ xs: 1, md: 1024 }} margin="0 auto">
          <Typography variant="h4" component="h1">
            {title}
          </Typography>
        </Box>
      )}
      <Box maxWidth={{ xs: 1, md: 1024 }} margin="0 auto">
        {children}
      </Box>
    </StyledContainer>
  </StyledLayout>
);

Layout.defaultProps = {
  title: null
};

export default Layout;
