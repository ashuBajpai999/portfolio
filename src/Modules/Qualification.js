import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Graduation from "../Assets/Images/Graduation.webp";
import Highschool from "../Assets/Images/Highschool.webp";
import Intermediate from "../Assets/Images/Intermediate.webp";
import PostGraduation from "../Assets/Images/PostGraduation.webp";

const Qualification = () => {
  const imageList = [
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
      path: Intermediate,
      SchoolName: { School: " B.N.S.D. Inter College" },
      BoardName: { Board: " U.P Board" },
      Result: { Result: " 71.06%" },
      Stream: { Stream: " Commerce" },
      RollNumber: { "Roll No.": " 1159691" },
      Year: { Year: " 2016" },
    },
    {
      path: Highschool,
      SchoolName: { School: " B.N.S.D. Inter College" },
      BoardName: { Board: " U.P Board" },
      Result: { Result: " 84.16%" },
      Stream: { Stream: " Commerce" },
      RollNumber: { "Roll No.": " 1555256" },
      Year: { Year: " 2014" },
    },
  ];
  return (
    <Grid container spacing={2} columnGap={2} id="Qualification">
      <Grid item md={12} xs={12} sm={12}>
        <Typography
          sx={{
            textAlign: "center",
            textDecoration: "underline",
            mt: 1,
          }}
          variant="h4"
        >
          Qualification Details
        </Typography>
      </Grid>
      <Grid item md={12} xs={12} sm={12}>
        <Grid
          container
          justifyContent="center"
          columnGap={1}
          spacing={2}
          marginBottom={2}
        >
          {imageList.map((data, index) => {
            return (
              <Grid item md={2.84} xs={12} sm={5.843} key={index}>
                <Card
                  sx={{
                    mr: { md: "1em", xs: "3em", sm: "1em" },
                    ml: { md: "1em", xs: "3em", sm: "1em" },
                  }}
                >
                  <CardMedia
                    image={data.path}
                    sx={{
                      aspectRatio: 1,
                    }}
                  ></CardMedia>
                  <CardContent
                    sx={{
                      aspectRatio: 1.6,
                    }}
                    className="qualificationContent"
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
                        {Object.keys(data.BoardName).toString()} :-
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
      </Grid>
    </Grid>
  );
};

export default Qualification;
