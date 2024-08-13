import React, { useCallback } from "react";
import FitnessCard from "../image/FitnessClub.webp";
import AshutoshCard from "../image/AshutoshLogo.webp";
import MygstCafeCard from "../image/myGSTcafe.webp";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import "../App.css";

const ProjectDetails = () => {
  const imageList = [
    {
      path: MygstCafeCard,
      id: "mygstCard",
      headingColor: "#5DB7FE",
      descriptionColor: "black",
      heading: "myGSTcafe",
      link: "https://erp.mygstcafe.com/",
      description:
        "MyGSTcafe is the easiest Offline GST Return Filing Software. It helps to automate many calculations regarding the GST and file accurate returns. It can upload data from your excel sheets. It provides the one-click reconciliation facility. Presently I'm working on this project to develop the UI and create functioning between components",
    },
    {
      path: FitnessCard,
      id: "fitnessCard",
      headingColor: "#FFD700",
      descriptionColor: "black",
      heading: "Fitness Club",
      link: "https://ashubajpai999.github.io/fitnessClub/",
      description:
        "This is a gym based website and here you see excercises videos, gym based products like equipments, supplemennts etc. Here a gym trainer guide many of his trainee through its excercises videos. This is responsive website and in this I use Firebase Database to connect from server",
    },
    {
      path: AshutoshCard,
      id: "profileCard",
      headingColor: "#96695E",
      descriptionColor: "#000000",
      heading: "Portfolio",
      link: "https://ashubajpai999.github.io/portfolio/",
      description:
        "This is my Portfolio, here you see my all project details, skills, education details and note about myself and also you can directly contact with me to fill a contact form given below.",
    },
  ];
  const redirect = useCallback((data) => {
    window.open(data.link, "_blank");
  }, []);
  return (
    <Grid container id="Project">
      <Grid item md={12} xs={12} sm={12}>
        <Typography
          sx={{
            textAlign: "center",
            textDecoration: "underline",
            pt: 2,
            pb: 2,
          }}
          variant="h4"
        >
          Project Details
        </Typography>
      </Grid>
      {imageList.map((data, index) => {
        return (
          <Grid
            item
            md={4}
            xs={12}
            sm={6}
            marginTop={3}
            marginBottom={3}
            key={index}
          >
            <Card
              className="card"
              sx={{
                mr: { md: "1em", xs: "3em", sm: "1em" },
                ml: { md: "1em", xs: "3em", sm: "1em" },
              }}
            >
              <CardMedia
                image={data.path}
                title="Click Me"
                sx={{
                  cursor: "pointer",
                  aspectRatio: 1,
                }}
                onClick={() => {
                  redirect(data);
                }}
              ></CardMedia>
              <CardContent
                sx={{
                  height: { md: "15em", xs: "0", sm: "20rem" },
                }}
              >
                <Link
                  variant="h5"
                  color={data.headingColor}
                  underline="hover"
                  sx={{ cursor: "pointer" }}
                  href={data.link}
                  target="_blank"
                >
                  {data.heading}
                </Link>
                <Typography
                  fontSize="1.1rem"
                  color={data.descriptionColor}
                  fontStyle="oblique"
                  textAlign="justify"
                >
                  {data.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProjectDetails;
