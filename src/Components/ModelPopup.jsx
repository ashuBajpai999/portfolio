import Call from "@mui/icons-material/Call";
import WhatsApp from "@mui/icons-material/WhatsApp";
import Avatar from "@mui/material/Avatar";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const option = [
  {
    optionName: "Whatsapp",
    icon: WhatsApp,
    bgColor: "#3fed13",
    avtarColor: "white",
  },
  {
    optionName: "Call",
    icon: Call,
    bgColor: "#3fed13",
    avtarColor: "white",
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
          "_blank",
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
          backgroundColor: "lightcyan",
        }}
      >
        {option.map((item, index) => (
          <ListItem disableGutters key={index}>
            <ListItemButton
              onClick={(e) => handleListItemClick(e, item.optionName)}
            >
              <ListItemAvatar>
                <Avatar
                  sx={{ color: item.avtarColor, backgroundColor: item.bgColor }}
                >
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
