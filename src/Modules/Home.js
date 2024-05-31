import { Avatar, Grid, Link, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
// import img from "../image/profileImage.png";
import img from "../image/ashutosh.png";
import "../App.css";

const Home = () => {
  const handleClick = (icon) => {
    debugger;
    switch (icon) {
      case "Facebook":
        window.open(
          "https://m.facebook.com/profile.php/?id=100004580445865&name=xhp_nt__fb__action__open_user",
          "_blank"
        );
        break;
      case "Instagram":
        window.open("https://instagram.com/surya9870/", "_blank");
        break;
      case "Github":
        window.open("https://github.com/ashuBajpai999/", "_blank");
        break;
      case "Linkedln":
        window.open(
          "https://in.linkedin.com/in/ashutosh-bajpai-6b8baa152",
          "_blank"
        );
        break;
      default:
        break;
    }
  };
  return (
    <Grid container className="main1">
      <Grid item md={7} xs={12} sm={7}>
        <Typography
          variant="h5"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontStyle: "italic",
            fontFamily: "cursive",
            textDecoration: "underline",
          }}
        >
          My Objective
        </Typography>
        <Typography
          variant="h6"
          sx={{
            margin: "2.5rem",
            fontStyle: "italic",
            textAlign: "justify",
            fontFamily: "cursive",
          }}
        >
          "To secure a position in an organization that offers opportunities for
          growth and advancement while also allowing me to utilize my skills and
          experience to contribute to the success of the company,,
        </Typography>
      </Grid>
      <Grid item md={5} xs={12} sm={5} sx={{}}>
        <Grid container className="center-container" sx={{ mt: 9 }}>
          <Grid item className="orbit-ring">
            <FacebookIcon
              className="orbit2-circle"
              fontSize="large"
              onClick={() => {
                handleClick("Facebook");
              }}
            />
            <InstagramIcon
              className="orbit3-circle"
              fontSize="large"
              onClick={() => {
                handleClick("Instagram");
              }}
            />
            <LinkedInIcon
              className="orbit4-circle"
              fontSize="large"
              onClick={() => {
                handleClick("Linkedln");
              }}
            />
            <GitHubIcon
              className="orbit1-circle"
              fontSize="large"
              onClick={() => {
                handleClick("Github");
              }}
            />
          </Grid>
          <Grid item className="center-circle">
            <img className="center-circle" src={img} alt="" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
