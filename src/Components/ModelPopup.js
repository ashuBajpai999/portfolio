import { Call, WhatsApp } from "@mui/icons-material";
import {
  Avatar,
  Dialog,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";

const option = [
  {
    optionName: "Whatsapp",
    icon: WhatsApp,
  },
  {
    optionName: "Call",
    icon: Call,
  },
];

const ModelPopup = (props) => {
  const { onClose, open } = props;

  const handleClose = (e) => {
    e.stopPropagation();
    onClose();
  };
  const handleListItemClick = (e, name) => {
    e.stopPropagation();
    switch (name) {
      case "Whatsapp":
        window.open(
          "https://wa.me/918299582099?text=Hello Ashutosh!!!",
          "_blank"
        );
        break;
      case "Call":
        window.location.href = "tel:<+918299582099>";
        break;
      default:
        break;
    }
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <List
        sx={{
          pt: 0,
          backgroundColor: "aqua",
        }}
      >
        {option.map((item, index) => (
          <ListItem disableGutters key={index}>
            <ListItemButton
              onClick={(e) => handleListItemClick(e, item.optionName)}
            >
              <ListItemAvatar>
                <Avatar sx={{ color: "#76ff03", backgroundColor: "black" }}>
                  <item.icon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.optionName} sx={{ color: "black" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};

export default ModelPopup;
