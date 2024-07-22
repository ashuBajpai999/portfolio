import { Call, Mail } from "@mui/icons-material";
import { Grid, Link, Typography } from "@mui/material";
import React from "react";
import "../App.css";
import { red } from "@mui/material/colors";

const ContactPage = () => {
  return (
    <Grid container id="Contact" className="contactBackground">
      <Grid item md={12} xs={12} sm={12}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            textDecoration: "underline",
            mt: 2,
          }}
        >
          Contact Me
        </Typography>
      </Grid>
      <Grid item md={12} sm={12} xs={12}>
        <Grid container display="flex">
          <Grid item md={5} sm={5} xs={12} margin={2}>
            <Typography variant="h2">Let's Connect With Chat</Typography>
          </Grid>
          <Grid item md={5}>
            <Grid container display="inherit" flexDirection="column">
              <Grid item>
                <Call color="black" />
                <Link color="black" underline="none">
                  +91 8299582099
                </Link>
              </Grid>
              <Grid item>
                <Mail color="black" />
                <Link
                  color="black"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=ashutoshbajpai512@gmail.com&su=Your Subject&body=Your message here"
                  target="_blank"
                  underline="none"
                >
                  ashutoshbajpai512@gmail.com
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactPage;
