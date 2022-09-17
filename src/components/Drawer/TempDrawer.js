import {
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import "./Drawer.css";

const TempDrawer = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const optionList = (anchor) => (
    <div style={{ width: "250px" }}>
      <List>
        <ListItem>
          <ListItemText
            style={{
              fontSize: "3rem",
              marginLeft: "5px",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" gutterBottom={true}>
              Options
            </Typography>
            <Divider />

            <Button style={{ width: "100%" }} sx={{ color: "#5f6368;" }}>
              <Typography
                style={{ marginTop: "5px" }}
                variant="h6"
                gutterBottom={true}
              >
                Options 1
              </Typography>
            </Button>

            <Button style={{ width: "100%" }} sx={{ color: "#5f6368;" }}>
              <Typography
                style={{ marginTop: "5px" }}
                variant="h6"
                gutterBottom={true}
              >
                Options 2
              </Typography>
            </Button>

            <Button style={{ width: "100%" }} sx={{ color: "#5f6368;" }}>
              <Typography
                style={{ marginTop: "5px" }}
                variant="h6"
                gutterBottom={true}
              >
                Options 3
              </Typography>
            </Button>
            <Divider />
            <Button style={{ width: "100%" }} sx={{ color: "#5f6368;" }}>
              <Typography
                style={{ marginTop: "5px" }}
                variant="h6"
                gutterBottom={true}
              >
                Options 4
              </Typography>
            </Button>

            <Button style={{ width: "100%" }} sx={{ color: "#5f6368;" }}>
              <Typography
                style={{ marginTop: "5px" }}
                variant="h6"
                gutterBottom={true}
              >
                Options 5
              </Typography>
            </Button>

            <Button style={{ width: "100%" }} sx={{ color: "#5f6368;" }}>
              <Typography
                style={{ marginTop: "5px" }}
                variant="h6"
                gutterBottom={true}
              >
                Options 6
              </Typography>
            </Button>
            <Divider />
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <IconButton onClick={toggleDrawer("left", true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        anchor={"left"}
      >
        {optionList("left")}
      </Drawer>
    </>
  );
};

export default TempDrawer;
