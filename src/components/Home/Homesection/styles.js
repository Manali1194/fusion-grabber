import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    width: "20rem",
    // marginBottom: "2rem",
  },
  marginB: {
    marginBottom: "2rem",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    // display: "flex",
    // justifyContent: "space-between",
    textAlign: "center",
  },

  divider: {
    margin: theme.spacing(2, 0),
  },
}));
