import React from "react";
import "./Tabs.css";

import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  tab: {
    fontSize: "1.5rem",
    color: "#5f6368",
    textTransform: "capitalize",
    height: 10,
    fontWeight: 300,
  },
  tabs: {
    height: 10,
  },
});

const FormTabs = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Tabs
        className={classes.tabs}
        textColor="primary"
        centered
        indicatorColor="primary"
      >
        <Tab className={classes.tab} label="Builder"></Tab>
        <Tab className={classes.tab} label="Preview Form"></Tab>
      </Tabs>
    </Paper>
  );
};

export default FormTabs;
