import { Call, Mail } from "@mui/icons-material";
import { Button, Grid, Link, Typography } from "@mui/material";
import React from "react";
import { getDownloadURL, ref } from "firebase/storage";
import "../App.css";
import { storage } from "../Components/Firebase";

const ContactPage = () => {
  const handleClick = async () => {
    try {
      // Reference to the CV file in Firebase Storage
      const cvRef = ref(storage, "ASHUTOSH BAJPAI.pdf"); // Ensure the path matches the one in your bucket

      // Get the download URL
      const cvUrl = await getDownloadURL(cvRef);

      // Open the CV in a new tab
      window.open(cvUrl, "_blank");
    } catch (error) {
      console.error("Error downloading CV:", error);
    }
  };
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
            <Typography>Let's Connect With Chat</Typography>
            <Button variant="contained" onClick={handleClick}>
              Download CV
            </Button>
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
