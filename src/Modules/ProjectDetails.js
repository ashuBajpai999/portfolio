import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useCallback } from "react";
import "../App.css";
import AshutoshCard from "../Assets/Images/AshutoshCard.webp";
import FitnessCard from "../Assets/Images/FitnessClub.webp";
import MygstCafeCard from "../Assets/Images/myGSTcafe.webp";

const ProjectDetails = () => {
  const imageList = [
    {
      path: MygstCafeCard,
      id: "mygstCard",
      headingColor: "#5DB7FE",
      descriptionColor: "black",
      heading: "myGSTcafe",
      link: "https://erpqa.mygstcafe.com/",
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
        "This gym website is designed to motivate and engage fitness enthusiasts through a clean, modern, and energetic interface. With smooth visuals and user-friendly navigation, it creates a high-impact experience that reflects strength and dedication. Whether you're a beginner or a pro, the platform is built to inspire action and help users stay connected to their fitness goals.",
    },
    {
      path: AshutoshCard,
      id: "profileCard",
      headingColor: "#96695E",
      descriptionColor: "#000000",
      heading: "Portfolio",
      link: "https://ashubajpai999.github.io/portfolio/",
      description:
        "This portfolio is a reflection of my creativity and passion for design, combining modern aesthetics, smooth animations, and real-time features to deliver a professional and engaging user experience. Every section is crafted to leave a lasting impression while keeping things simple, elegant, and easy to explore.",
    },
  ];
  const redirect = useCallback((data) => {
    window.open(data.link, "_blank");
  }, []);
  return (
    <Grid container id="Project" spacing={2}>
      <Grid item md={12} xs={12} sm={12}>
        <Typography
          sx={{
            textAlign: "center",
            textDecoration: "underline",
            mt: 1,
          }}
          variant="h4"
        >
          Project Details
        </Typography>
      </Grid>
      <Grid item md={12} xs={12} sm={12}>
        <Grid
          container
          spacing={2}
          columnGap={1}
          justifyContent="center"
          marginBottom={2}
        >
          {imageList.map((data, index) => {
            return (
              <Grid item md={3.5} xs={12} sm={5.843} key={index}>
                <Card
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
                      height: { md: "20em", xs: "0", sm: "20rem" },
                    }}
                    className="projectContent"
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
      </Grid>
    </Grid>
  );
};

export default ProjectDetails;
