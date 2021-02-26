import "./styles.css";
import React from "react";
import { Button, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  helloThemeStyle: {
    fontStyle: "oblique",
    color: "red",
    fontSize: "30px"
  },
  buttonStyle: {
    color: "purple"
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <h1 color="primary">Hello Header 1</h1>
      <Typography
        className={classes.helloThemeStyle}
        variant="h1"
        color="primary"
      >
        {" "}
        This is default{" "}
      </Typography>
      <Button
        className={classes.buttonStyle}
        variant="outlined"
        color="Secondary"
      >
        This is First Button{" "}
      </Button>
    </div>
  );
}
