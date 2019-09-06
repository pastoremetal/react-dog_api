import React from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HouseIcon from "@material-ui/icons/Home";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          aria-controls="customized-menu"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem component="a" href="/">
            <ListItemIcon>
              <HouseIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </MenuItem>
        </Menu>
        <Typography variant="h6" component="span">
          Dogo React API
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
