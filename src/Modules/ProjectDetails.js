import React, { useCallback } from "react";
import FitnessCard from "../image/FitnessClub.png";
import AshutoshCard from "../image/AshutoshLogo.png";
import MygstCafeCard from "../image/myGSTcafe.png";
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
        "This is my Portfolio website here you see my all project details, skills, education details and a short note about myself",
    },
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
      {imageList.map((data) => {
        return (
          <Grid item md={4} xs={12} sm={6} marginTop={3} marginBottom={3}>
            <Card
              className="card"
              sx={{
                maxWidth: { md: 400, xs: 330, sm: 430 },
                mr: { md: "auto", xs: "auto", sm: "auto" },
                ml: { md: "auto", xs: "auto", sm: "auto" },
              }}
            >
              <CardMedia
                image={data.path}
                title="Click Me"
                sx={{
                  height: { md: 370, xs: 330, sm: 430 },
                  cursor: "pointer",
                }}
                onClick={() => {
                  redirect(data);
                }}
              ></CardMedia>
              <CardContent
                sx={{
                  minHeight: { md: 222, xs: 0, sm: 200 },
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
                  variant="h6"
                  fontSize={17}
                  color={data.descriptionColor}
                  fontStyle={"italic"}
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
