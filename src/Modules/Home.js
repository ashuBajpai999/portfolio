import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import img from "../image/profileImage.png";
import "../App.css";

const Home = () => {
  return (
    <Grid container className="main1">
      <Grid item md={6} xs={12}>
        <Typography
          variant="h6"
          sx={{
            mt: { md: 15, xs: 2 },
            ml: { md: 8, xs: 7 },
            mr: { md: 0, xs: 7 },
            fontStyle: "italic",
            textAlign: "justify",
            fontFamily: "cursive",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              ml: { md: 27, xs: 7 },
              mr: { md: 20, xs: 7 },
              fontStyle: "italic",
              fontFamily: "cursive",
              textDecoration: "underline",
            }}
          >
            My Objective
          </Typography>
          "To secure a position in an organization that offers opportunities for
          growth and advancement while also allowing me to utilize my skills and
          experience to contribute to the success of the company,,
        </Typography>
      </Grid>
      <Grid item md={6} xs={12}>
        <Avatar
          className="avtarWhite"
          variant="square"
          sx={{
            bgcolor: "white",
            width: { md: 370, xs: 300 },
            height: { md: 370, xs: 300 },
            mt: 9,
            ml: { md: "auto", xs: "auto" },
            mr: { md: "auto", xs: "auto" },
            transform: "rotate(45deg)",
          }}
        />
        <Avatar
          variant="rounded"
          className="avtarColor"
          srcSet={img}
          sx={{
            mt: { md: -45, xs: -36 },
            ml: { md: "auto", xs: "auto" },
            mr: { md: "auto", xs: "auto" },
            width: { md: 180, xs: 200 },
            height: { md: 350, xs: 280 },
            transform: { md: "scale(1)", xs: "scale(0.9)" },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Home;
