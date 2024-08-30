import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { ArrowDownward } from "@mui/icons-material";
import { getDownloadURL, ref } from "firebase/storage";
import "../App.css";
import { storage } from "../Components/Firebase";
import img from "../image/ashutosh.webp";

const Home = () => {
  const handleClick = (icon) => {
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

  const downloadCV = async () => {
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
    <Grid container className="main1">
      <Grid item md={7} xs={12} sm={7} className="objective">
        <div
        // style={{ marginBottom: "10px" }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "sans",
              textDecoration: "underline",
              textAlign: "center",
            }}
          >
            My Objective
          </Typography>
        </div>
        <div>
          <Typography
            variant="h6"
            sx={{
              margin: "2rem",
              textAlign: "justify",
            }}
          >
            "To secure a position in an organization that offers opportunities
            for growth and advancement while also allowing me to utilize my
            skills and experience to contribute to the success of the company,,
          </Typography>
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          <Button
            onClick={downloadCV}
            variant="contained"
            sx={{
              backgroundColor: "aqua",
              "&:hover": {
                backgroundColor: "aqua",
              },
              color: "black",
              marginBottom: "3vw",
            }}
          >
            Download CV
            <ArrowDownward
              sx={{
                width: 40,
                height: 40,
                ml: 1,
                border: "2px solid black",
                borderRadius: "50%",
              }}
            ></ArrowDownward>
          </Button>
        </div>
      </Grid>
      <Grid item md={5} xs={12} sm={5} className="orbit">
        <Grid container className="center-container">
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
          <Grid item className="center-circle-avtar">
            <img className="center-circle" src={img} alt="" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
