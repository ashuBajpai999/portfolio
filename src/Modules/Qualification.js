import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import Graduation from "../image/Graduation.png";
import Highschool from "../image/Highschool.png";
import Intermediate from "../image/Intermediate.png";
import PostGraduation from "../image/PostGraduation.png";

const Qualification = () => {
  const imageList = [
    {
      path: Highschool,
      SchoolName: { School: " B.N.S.D. Inter College" },
      BoardName: { Board: " U.P Board" },
      Result: { Result: " 84.16%" },
      Stream: { Stream: " Commerce" },
      RollNumber: { "Roll No.": " 1555256" },
      Year: { Year: " 2014" },
    },
    {
      path: Intermediate,
      SchoolName: { School: " B.N.S.D. Inter College" },
      BoardName: { Board: " U.P Board" },
      Result: { Result: " 71.06%" },
      Stream: { Stream: " Commerce" },
      RollNumber: { "Roll No.": " 1159691" },
      Year: { Year: " 2016" },
    },
    {
      path: Graduation,
      SchoolName: {
        College: " Dr. VSICS, Saket Nagar, Kanpur",
      },
      BoardName: { University: " C.S.J.M.U" },
      Result: { Result: " 59.19%" },
      Stream: { Course: " B.C.A" },
      RollNumber: { "Roll No.": " 0803619" },
      Year: { Year: " 2016 - 2019" },
    },
    {
      path: PostGraduation,
      SchoolName: {
        College: " Dr. VSICS, Saket Nagar, Kanpur",
      },
      BoardName: { University: " A.K.T.U" },
      Result: { Result: " 80.01%" },
      Stream: { Course: " M.C.A" },
      RollNumber: { "Roll No.": " 2100470140019" },
      Year: { Year: " 2021 - 2023" },
    },
  ];
  return (
    <Grid container spacing={2} id="Qualification">
      <Grid item md={12} xs={12} sm={12}>
        <Typography
          sx={{ textAlign: "center", textDecoration: "underline", mt: 2 }}
          variant="h4"
        >
          Qualification Details
        </Typography>
      </Grid>
      {imageList.map((data, index) => {
        return (
          <Grid
            item
            md={2.7}
            xs={12}
            sm={5}
            marginTop={0}
            marginBottom={3}
            marginLeft={2}
            marginRight={2}
            key={index}
          >
            <Card
              sx={{
                maxWidth: { md: 320, xs: 330, sm: 500 },
                mr: { md: "auto", xs: "auto", sm: "auto" },
                ml: { md: "auto", xs: "auto", sm: "auto" },
              }}
            >
              <CardMedia
                image={data.path}
                sx={{
                  height: { md: 300, xs: 330, sm: 430 },
                }}
              ></CardMedia>
              <CardContent
                sx={{
                  maxWidth: { md: 320, xs: 330, sm: 500 },
                  minHeight: { md: 150, xs: 150, sm: 150 },
                  mr: { md: "auto", xs: "auto", sm: "auto" },
                  ml: { md: "auto", xs: "auto", sm: "auto" },
                }}
                className="hu"
              >
                <Typography className="decorative">
                  <span className="headingSpan">
                    {Object.keys(data.SchoolName).toString()} :-
                  </span>
                  <span className="contentSpan">
                    {Object.values(data.SchoolName).toString()}
                  </span>
                </Typography>
                <Typography className="decorative">
                  <span className="headingSpan">
                    {Object.keys(data.BoardName).toString()} :
                  </span>
                  <span className="contentSpan">
                    {Object.values(data.BoardName).toString()}
                  </span>
                </Typography>
                <Typography className="decorative">
                  <span className="headingSpan">
                    {Object.keys(data.Result).toString()} :-
                  </span>
                  <span className="contentSpan">
                    {Object.values(data.Result).toString()}
                  </span>
                </Typography>
                <Typography className="decorative">
                  <span className="headingSpan">
                    {Object.keys(data.Stream).toString()} :-
                  </span>
                  <span className="contentSpan">
                    {Object.values(data.Stream).toString()}
                  </span>
                </Typography>
                <Typography className="decorative">
                  <span className="headingSpan">
                    {Object.keys(data.RollNumber).toString()} :-
                  </span>
                  <span className="contentSpan">
                    {Object.values(data.RollNumber).toString()}
                  </span>
                </Typography>
                <Typography className="decorative">
                  <span className="headingSpan">
                    {Object.keys(data.Year).toString()} :-
                  </span>
                  <span className="contentSpan">
                    {Object.values(data.Year).toString()}
                  </span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Qualification;
