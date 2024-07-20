import { Grid, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "cornsilk",
      }}
      id="About"
    >
      <Grid item md={12} xs={12} sm={12}>
        <Typography
          sx={{
            textAlign: "center",
            textDecoration: "underline",
            mt: 2,
          }}
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
        >
          Hello, I'm <span>Ashutosh Bajpai,</span> a dedicated{" "}
          <span>Web Application Developer</span> specializing in{" "}
          <span>React JS, HTML, CSS, & JQuery</span> with a year of hands-on
          experience and I'm from <span>Unnao, Uttar Pradesh</span>. I'm
          currently working in
          <span> Opticodes Technologies Private Limited</span> from the
          March-2023 as a<span> Web Application Developer.</span> I've taken on
          pivotal roles in meeting front-end requirements, focusing on crafting
          engaging and seamless web pages. What truly excites me is the process
          of <span>designing</span> and <span>developing</span> captivating
          website pages that resonate with users. My aspiration is to evolve
          into a Full Stack Developer, expanding my skills to encompass a
          broader spectrum of web development. I completed my{" "}
          <span> MCA(Master of Computer Apllication)</span> from{" "}
          <span> Dr. Virendra Swarup Institute of Computer Studies</span>,
          Kanpur Nagar, Uttar Pradesh in year 2021-2023. I have also done my
          BCA(Bachelor of Computer Application) from this college in year
          2016-2019. I completed my <span> Intermediate</span> &
          <span> Highschool</span> in year 2016 & 2014. I'm driven by the
          creativity inherent in design and the problem-solving aspect of
          development, constantly striving to enhance user experiences
        </Typography>
      </Grid>
    </Grid>
  );
};

export default About;
