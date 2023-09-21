import React from "react";
import GraduationCard from "../image/BCACard.png";
import Graduation from "../image/Graduation.png";
import HighchoolCard from "../image/HighSchoolCard.png";
import Highschool from "../image/Highschool.png";
import InterMediateCard from "../image/InterCard.png";
import Intermediate from "../image/Intermediate.png";
import PgCard from "../image/MCACard.png";
import PostGraduation from "../image/PostGraduation.png";
import { Card, CardMedia, Grid, Typography } from "@mui/material";

const Qualification = () => {
  const imageList = [
    {
      path: Highschool,
      heading: "",
      description: "",
      detailCard: HighchoolCard,
    },
    {
      path: Intermediate,
      heading: "",
      description: "",
      detailCard: InterMediateCard,
    },
    {
      path: Graduation,
      heading: "",
      description: "",
      detailCard: GraduationCard,
    },
    {
      path: PostGraduation,
      heading: "",
      description: "",
      detailCard: PgCard,
    },
  ];
  return (
    <Grid
      container
      spacing={2}
      id="Qualification"
      sx={{ height: { md: "92vh", xs: "none", sm: "none" } }}
    >
      <Grid item md={12} xs={12} sm={12}>
        <Typography
          sx={{ textAlign: "center", textDecoration: "underline", mt: 2 }}
          variant="h4"
        >
          Qualification Details
        </Typography>
      </Grid>
      {imageList.map((data) => {
        return (
          <Grid
            item
            md={2.7}
            xs={12}
            sm={5}
            marginTop={3}
            marginBottom={3}
            marginLeft={2}
            marginRight={2}
          >
            <Card
              sx={{
                maxWidth: { md: 320, xs: 330, sm: 500 },
                mr: { md: "auto", xs: "auto", sm: "auto" },
                ml: { md: "auto", xs: "auto", sm: "auto" },
              }}
            >
              <CardMedia
                className="firstImage"
                image={data.path}
                sx={{
                  height: { md: 300, xs: 330, sm: 430 },
                  position: "relative",
                  transition: "0.5s ease-in-out",
                }}
              ></CardMedia>
              <CardMedia
                className="secondImage"
                image={data.detailCard}
                sx={{
                  height: { md: 300, xs: 330, sm: 430 },
                  mt: { md: -38, sm: -54 },
                  display: { xs: "none", md: "flex", sm: "flex" },
                }}
              ></CardMedia>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Qualification;
