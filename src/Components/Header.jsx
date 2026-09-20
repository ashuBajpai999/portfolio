import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Avatar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import "../App.css";
import "../Assets/CSS/Header.css";
import dp from "../Assets/Images/ashutosh.webp";
import { NAV_ITEMS } from "../constants/portfolioData";

const Header = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavigation = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <AppBar
        className="portfolio-header"
        component="header"
        position="absolute"
        elevation={0}
      >
        <Toolbar className="header-toolbar">
          {/* Mobile / Tablet Menu */}
          <IconButton
            aria-label="Open navigation menu"
            className="mobile-menu-button"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>

          {/* Brand */}
          <Typography
            component="a"
            href="#home"
            className="portfolio-brand"
            aria-label="Ashutosh Bajpai Home"
          >
            ASHUTOSH <span>BAJPAI</span>
          </Typography>

          {/* Desktop Navigation */}
          <Box component="nav" className="desktop-navigation">
            {NAV_ITEMS.map((item) => (
              <Typography
                key={item.href}
                component="a"
                href={item.href}
                className="desktop-nav-link"
              >
                {item.label}
              </Typography>
            ))}
          </Box>

          {/* Profile */}
          <Avatar src={dp} alt="Ashutosh Bajpai" className="header-avatar" />
        </Toolbar>
      </AppBar>

      {/* Mobile / Tablet Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={toggleDrawer}
        ModalProps={{ keepMounted: true }} // Better open performance on mobile.
        PaperProps={{
          className: "mobile-drawer",
        }}
      >
        <Box className="drawer-header">
          <Typography className="drawer-brand">
            ASHUTOSH <span>BAJPAI</span>
          </Typography>

          <IconButton
            className="drawer-close-icon"
            onClick={toggleDrawer}
            aria-label="Close navigation menu"
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {NAV_ITEMS.map((item) => (
            <ListItemButton
              key={item.href}
              component="a"
              href={item.href}
              onClick={handleNavigation}
              className="mobile-nav-link"
            >
              <ListItemText primary={item.label} className="menu-label" />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
