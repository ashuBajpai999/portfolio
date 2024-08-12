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
        break;
      case "Call":
        alert("hello");
        break;
      default:
        break;
    }
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <List sx={{ pt: 0 }}>
        {option.map((item, index) => (
          <ListItem disableGutters key={index}>
            <ListItemButton
              onClick={(e) => handleListItemClick(e, item.optionName)}
            >
              <ListItemAvatar>
                <Avatar sx={{ color: "#76ff03", backgroundColor: "white" }}>
                  <item.icon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.optionName} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};

export default ModelPopup;
