import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

import CartItem from "./CartItem/CartItem";

import useStyles from "./styles";

const Cart = ({
  cart,
  handleEmptyCart,
  handleUpdateCartQty,
  handleRemoveFromCart,
}) => {
  const classes = useStyles();

  //EmptyCart and FilledCart are subcomponents that are simply returning JSX

  const EmptyCart = () => (
    <Typography varient="subtitle1">
      You have no items in your Shopping Cart,
      <Link to="/products" className={classes.link}>
        Start Adding Some
      </Link>
      !
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          //return instantly
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem
              item={item}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          {" "}
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
      </div>
      <div>
        <Button
          className={classes.emptyButton}
          size="large"
          type="button"
          varient="contained"
          color="secondary"
          onClick={handleEmptyCart}
        >
          Empty Cart
        </Button>
        <Button
          className={classes.checkoutButton}
          component={Link}
          to="/checkout"
          size="large"
          type="button"
          varient="contained"
          color="primary"
        >
          Checkout Cart
        </Button>
      </div>
    </>
  );

  if (!cart.line_items) return "Loading...";

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
