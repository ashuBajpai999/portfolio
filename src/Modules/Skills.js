import { Grid, Typography } from "@mui/material";
import React from "react";

const Skills = () => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "lightcyan",
      }}
      id="Skills"
    >
      <Grid item md={12} xs={12} sm={12}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", textDecoration: "underline", mt: 2 }}
        >
          My Skills
        </Typography>
      </Grid>
      <Grid
        item
        md={12}
        xs={12}
        sm={12}
        className="skills"
        sx={{ ml: { md: "10vw", xs: 0 }, mr: { md: "10vw", xs: 3 } }}
      >
        <ul>
          <li>
            Core knowladge of <span> Java</span> and basic knowladge of
            <span> Java Advance.</span>
          </li>
          <li>
            Working Experience in <span>C#</span> with
            <span> .NET Framework.</span>
          </li>
          <li>
            Experience in handling queries in <span>PostgreSQL</span> and
            <span> FirebirdSQL.</span>
          </li>
          <li>
            Experience in using <span> MUI - Material UI</span> for creating
            responsive UI.
          </li>
          <li>
            Working experience in <span> Git</span> & <span> Github</span> and
            has a solid understanding of version control.
          </li>
          <li>
            Skilled in using <span> Redux Toolkit</span> and
            <span> React Router</span> to build scalable and robust web
            applictions.
          </li>
          <li>
            Proficient in UI developement using front-end technologies like
            <span> HTML5, CSS3, JavaScript, ReactJS.</span>
          </li>
          <li>
            Utilized <span>Tortoise SVN</span> for version control, managing
            commits and updates to ensure seamless team collaboration and code
            integrity.
          </li>
          <li>
            Ability to work in fast-paced and dynamic environment, and meet
            close deadlines under any given environment to deliver quality
            product.
          </li>
          <li>
            Motivated and dedicated professional open to learn new technologies
            and accept challenges to meet or exceed company standards.
          </li>
        </ul>
      </Grid>
    </Grid>
  );
};

export default Skills;
