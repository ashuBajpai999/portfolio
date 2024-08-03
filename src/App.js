import { Divider, Grid } from "@mui/material";
import React, { Fragment } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import About from "./Modules/About";
import Home from "./Modules/Home";
import ProjectDetails from "./Modules/ProjectDetails";
import Qualification from "./Modules/Qualification";
import Skills from "./Modules/Skills";

function App() {
  return (
    <Fragment>
      <Grid container className="main">
        <Grid item md={12} xs={12} sm={12}>
          <Header />
        </Grid>
        <Grid item md={12} xs={12} sm={12}>
          <Home />
        </Grid>
      </Grid>
      <About />
      <Divider
        sx={{
          height: "1px",
          backgroundColor: "lightGrey",
        }}
      />
      <ProjectDetails />
      <Divider
        sx={{
          height: "1px",
          backgroundColor: "lightGrey",
        }}
      />
      <Qualification />
      <Divider
        sx={{
          height: "1px",
          backgroundColor: "lightGrey",
        }}
      />
      <Skills />
      <Divider
        sx={{
          height: "1px",
          backgroundColor: "lightGrey",
        }}
      />

      <Footer />
    </Fragment>
  );
}

export default App;
