import React from "react";
import {
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { Link, useLocation } from "react-router-dom";

import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";

import useStyles from "./styles";
const Homesection = () => {
  const location = useLocation();
  const classes = useStyles();
  return (
    <>
      {location.pathname === "/" && (
        <div style={{ padding: 100 }}>
          <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="center"
          >
            <Typography
              align="center"
              variant="h5"
              gutterBottom
              style={{ maxWidth: "53rem", textTransform: "uppercase" }}
            >
              Style is when they are running you out of the town and you make it
              look like you are leading the parade.
            </Typography>
            <Button component={Link} to="/products" variant="outlined">
              Find Out
            </Button>
          </Grid>
          <Divider className={classes.divider} />
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="flex-start"
            style={{ height: "25em" }}
            // xs={12}
            // sm={6}
            // md={4}
            // lg={3}
          >
            <div className={classes.marginB}>
              <Card className={classes.root}>
                <CardMedia className={classes.media} image={image1} />

                <CardContent
                  className={classes.cardContent}
                  color="textSecondary"
                >
                  Ethnic Wear
                </CardContent>
              </Card>
            </div>
            <div style={{ alignSelf: "center" }} className={classes.marginB}>
              <Card className={classes.root}>
                <CardMedia className={classes.media} image={image2} />
                <CardContent className={classes.cardContent}>
                  Casual Wear
                </CardContent>
              </Card>
            </div>
            <div className={classes.marginB}>
              <Card className={classes.root}>
                <CardMedia className={classes.media} image={image3} />
                <CardContent className={classes.cardContent}>
                  Formal Wear
                </CardContent>
              </Card>
            </div>
          </Grid>
        </div>
      )}
    </>
  );
};

export default Homesection;
