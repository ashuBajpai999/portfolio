import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Link, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import React, { Fragment } from "react";
import "../App.css";
import dp from "../image/ashutosh.png";
const drawerWidth = 170;
const navItems = [
  { name: "Home", id: "" },
  { name: "About", id: "#About" },
  { name: "Project", id: "#Project" },
  { name: "Qualification", id: "#Qualification" },
  { name: "Skills", id: "#Skills" },
  { name: "Contact", id: "#Contact" },
];

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Ashutosh Bajpai
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component="a"
              href={item.id}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Fragment>
      <AppBar className="appbar" component="nav" sx={{ background: "black" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Avatar
            src={dp}
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
            }}
          />
          <Typography
            className="avtar"
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", sm: "flex" },
              fontFamily: "cursive",
            }}
          >
            ASHUTOSH BAJPAI
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
            {navItems.map((item) => (
              <Link
                underline="none"
                href={item.id}
                sx={{
                  color: "aqua",
                  p: { md: 2, sm: 0.6 },
                  fontWeight: 900,
                  fontSize: "1em",
                }}
              >
                {item.name}
              </Link>
            ))}
          </Box>
          <Avatar
            src={dp}
            sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}
          />
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "flex", sm: "flex", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Fragment>
  );
};

export default Header;
