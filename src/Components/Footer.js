import { Favorite, Mail, WhatsApp } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Divider, Grid, Link, Typography } from "@mui/material";
import { useState } from "react";
import "../App.css";
import "../Assets/CSS/Footer.css";
import "../Assets/CSS/Icon.css";
import ModelPopup from "./ModelPopup";

const Footer = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = (event) => {
    event.stopPropagation();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const width = window.innerWidth;
  const isMdScreen = width < 1400 && width >= 900;

  const email = "ashutoshbajpai512@gmail.com";
  const subject = "Recruitment Process";
  const body = "Your message here";

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const mailtoUrl = isMobile
    ? `mailto:${email}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`
    : `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        email,
      )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return (
    <Grid container className="footer">
      <Grid item xs={12} md={3.5} sm={5}>
        <Grid
          container
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item xs={12}>
            <p
              className="contactMe name"
              style={{
                fontStyle: "oblique",
                textAlign: "center",
              }}
            >
              CONTACT ME
            </p>
            <p className="txtCenter">
              <Link
                color="aqua"
                href={mailtoUrl}
                target="_blank"
                underline="none"
                className="mailLink"
                aria-label="Send an email to ashutoshbajpai512@gmail.com"
              >
                <Mail
                  className="glow-icon delay-1"
                  sx={{
                    color: "aqua",
                    verticalAlign: "middle",
                    mr: 1,
                  }}
                  // viewBox="2 0 22 18"
                  fontSize="large"
                />
                ashutoshbajpai512@gmail.com
              </Link>
            </p>
            <p className="txtCenter">
              <Link
                color="aqua"
                sx={{ cursor: "pointer" }}
                // target="_blank"
                onClick={handleClickOpen}
                underline="none"
                className="mailLink"
              >
                <WhatsApp
                  sx={{
                    color: "aqua",
                    verticalAlign: "middle",
                    mr: 1,
                  }}
                  fontSize="large"
                  className="glow-icon delay-2"
                />
                +91 8299582099
                {open && <ModelPopup open={open} onClose={handleClose} />}
              </Link>
            </p>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={8}
        md={0.02}
        className={isMdScreen ? "verticalDivider" : "horizontalDivider"}
      >
        <Divider
          orientation={isMdScreen ? "vertical" : ""}
          variant={isMdScreen ? "fullWidth" : "middle"}
        />
      </Grid>
      <Grid item xs={12} md={3.5} sm={12}>
        <Grid
          container
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item xs={12}>
            <p
              className="socialAddress name"
              style={{
                fontStyle: "oblique",
                textAlign: "center",
              }}
            >
              SOCIAL ADDRESS
            </p>
            <p style={{ textAlign: "center" }}>
              <Link
                href="https://in.linkedin.com/in/ashutosh-bajpai-6b8baa152"
                target="_blank"
              >
                <LinkedInIcon
                  fontSize="large"
                  className="icon glow-icon delay-3"
                />
              </Link>
              <Link href="https://github.com/ashuBajpai999/" target="_blank">
                <GitHubIcon
                  fontSize="large"
                  className="icon glow-icon delay-4"
                />
              </Link>
            </p>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={10}
        md={0.02}
        className={isMdScreen ? "verticalDivider" : "horizontalDivider"}
      >
        <Divider
          orientation={isMdScreen ? "vertical" : ""}
          variant={isMdScreen ? "fullWidth" : "middle"}
        />
      </Grid>
      <Grid item xs={12} md={3.5} sm={12}>
        <Grid
          container
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            sx={{ textAlign: "center" }}
            className="footerText"
          >
            <p className="text">© 2025 @AshuTheWebDev - All rights reserved.</p>
            <Typography className="name">
              Ashutosh Bajpai
              <Favorite
                fontSize="large"
                sx={{ verticalAlign: "middle", ml: 1 }}
                className=" glow-icon delay-5"
              />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
