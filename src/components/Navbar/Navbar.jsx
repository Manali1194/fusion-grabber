import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

// import logo from "../../assets/commerce.png";

import logo from "../../assets/cart.gif";

import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
      });
    };
  }, [scroll]);

  return (
    <>
      <AppBar
        position="fixed"
        className={
          scroll ? `${classes.appBar}` : `${classes.appBarTransparent}`
        }
        color="inherit"
      >
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            varient="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="fusion grabber"
              height="25px"
              className={classes.image}
            />
            Fusion Grabber
          </Typography>
          <div className={classes.grow} />
          {location.pathname === "/products" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="show cart item"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
