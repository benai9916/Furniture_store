import React from "react";
import useStyles from "./style";
import {
  IconButton,
  InputBase,
  Typography,
  Toolbar,
  Badge,
  AppBar,
} from "@material-ui/core";
import WeekendRoundedIcon from "@material-ui/icons/WeekendRounded";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { useSelector } from "react-redux";

const Navbar = ({ searchProduct }) => {
  const classes = useStyles();

  const catalog = useSelector((state) => state.catalog);

  const { cart, favorites } = catalog;

  return (
    <div>
      <AppBar
        position="fixed"
        color="transparent"
        classes={{ root: classes.hide }}
      >
        <Toolbar className={classes.wrapper}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <WeekendRoundedIcon
              fontSize="large"
              className={classes.brandIcon}
            />
          </IconButton>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            color="inherit"
            className={classes.title}
            letterSpacing={2}
            fontFamily="Monospace"
          >
            Furniture
          </Typography>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={searchProduct}
            />
          </div>
          <div className={classes.allIcons}>
            <IconButton
              aria-label="show 17 new notifications"
              color="inherit"
              style={{ paddingTop: 0 }}
            >
              <Badge
                badgeContent={favorites === 0 ? null : favorites}
                color="secondary"
              >
                <FavoriteBorderIcon />
              </Badge>

              <Badge
                badgeContent={cart === 0 ? null : cart}
                color="secondary"
                className={classes.navIcons}
              >
                <ShoppingCartIcon color="primary" />
              </Badge>
            </IconButton>
            <AccountCircleRoundedIcon />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
