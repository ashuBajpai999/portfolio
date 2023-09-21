import { Grid, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "cornsilk",
        height: { md: "100vh", xs: "none", sm: "none" },
      }}
      id="About"
    >
      <Grid item md={12} xs={12} sm={12}>
        <Typography
          sx={{ textAlign: "center", textDecoration: "underline", mt: 2 }}
          variant="h4"
        >
          About Me
        </Typography>
      </Grid>
      <Grid item md={12} xs={12} sm={12}>
        <Typography
          textAlign="center"
          className="about"
          lineHeight={1.5}
          sx={{
            marginLeft: { md: 20, xs: 3, sm: 3 },
            marginRight: { md: 20, xs: 3, sm: 3 },
            marginTop: { md: 3, sm: 3, xs: 3 },
            marginBottom: { md: 3, sm: 5, xs: 5 },
          }}
          variant="h5"
        >
          My name is <span>Ashutosh Bajpai</span> and I'm from{" "}
          <span>Unnao, Uttar Pradesh</span>. I'm currently working in
          <span> Opticodes Technologies Private Limited</span> from the date of
          01-March-2023 as a<span> Web Application Developer.</span> I completed
          my <span> MCA(Master of Computer Apllication)</span> from{" "}
          <span> Dr. Virendra Swarup Institute of Computer Studies</span>,
          Kanpur Nagar, Uttar Pradesh in year 2021-2023. I have also done my
          BCA(Bachelor of Computer Application) from this college in year
          2016-2019. I completed my <span> Intermediate</span> &
          <span> Highschool</span> in year 2016 & 2014.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default About;
