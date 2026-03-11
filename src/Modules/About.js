import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const mobileView = (
    <>
      Hello! I’m <span>Ashutosh Bajpai</span>, a passionate and dedicated{" "}
      <span>Web Application Developer</span> from{" "}
      <span>Unnao, Uttar Pradesh</span>, with over a year of hands-on experience
      in creating modern, responsive web applications. Since{" "}
      <span>March 2023</span>, I’ve been working at{" "}
      <span>Opticodes Technologies Private Limited</span>, where I focus on
      developing interactive and user-friendly interfaces using{" "}
      <span>React JS</span>, along with{" "}
      <span>HTML5, CSS3, JavaScript, jQuery</span>, and <span>Material UI</span>
      . I regularly work with <span>React Hooks</span> to manage component state
      and side effects, and integrate <span>RESTful APIs</span> to build
      dynamic, data-driven features. On the backend side, I contribute using{" "}
      <span>C# and .NET</span>, connecting applications with
      <span> PostgreSQL</span> and<span> FirebirdSQL</span> databases.
    </>
  );
  const desktopView = (
    <>
      {mobileView} I also use <span>Firebase</span> to implement real-time
      functionality and lightweight backend services. My development workflow
      includes tools like <span>Visual Studio</span>, <span>VS Code</span>,{" "}
      <span>Postman</span>, and version control systems such as <span>Git</span>
      , <span>GitHub</span>, and <span>TortoiseSVN</span> to maintain clean and
      collaborative codebases. I earned my{" "}
      <span>Master of Computer Applications (MCA)</span> in <span>2023</span>,
      and <span>Bachelor of Computer Applications (BCA)</span> in{" "}
      <span>2019</span>, both from{" "}
      <span>Dr. Virendra Swarup Institute of Computer Studies, Kanpur</span>. I
      completed my <span>Intermediate</span> in <span>2016</span> and{" "}
      <span>High School</span> in <span>2014</span>. What excites me most is the
      process of transforming creative ideas into meaningful digital
      experiences. I'm especially drawn to crafting{" "}
      <span>clean, engaging UIs</span> that are both functional and visually
      appealing. My goal is to evolve into a <span>Full Stack Developer</span>,
      gaining deeper expertise in <span>backend technologies</span>,{" "}
      <span>scalable architectures</span>, and <span>cloud-based systems</span>.
      Driven by <span>curiosity</span> and a love for{" "}
      <span>problem-solving</span>, I’m constantly learning and improving —
      striving to create websites that users love and remember.
    </>
  );
  return (
    <Grid
      container
      sx={{
        backgroundColor: "cornsilk",
      }}
      id="About"
    >
      <Grid item md={12} xs={12} sm={12}>
        <Typography
          sx={{
            textAlign: "center",
            textDecoration: "underline",
            mt: 2,
          }}
          variant="h4"
        >
          About Me
        </Typography>
      </Grid>
      <Grid item md={12} xs={12} sm={12}>
        {isMobile && !isExpanded ? (
          <Typography
            textAlign="center"
            className="about"
            lineHeight={1.5}
            sx={{
              marginLeft: { md: "10vw", xs: 3, sm: 3 },
              marginRight: { md: "10vw", xs: 3, sm: 3 },
              marginTop: { md: 3, sm: 3, xs: 3 },
              marginBottom: { md: 3, sm: 5, xs: 5 },
            }}
          >
            {mobileView}....
            {isMobile && (
              <span onClick={toggleExpand} className="see-more-btn">
                Read More
              </span>
            )}
          </Typography>
        ) : (
          <Typography
            textAlign="center"
            className="about"
            lineHeight={1.5}
            sx={{
              marginLeft: { md: "10vw", xs: 3, sm: 3 },
              marginRight: { md: "10vw", xs: 3, sm: 3 },
              marginTop: { md: 3, sm: 3, xs: 3 },
              marginBottom: { md: 3, sm: 5, xs: 5 },
            }}
          >
            {desktopView}
            {isMobile && (
              <span onClick={toggleExpand} className="see-more-btn">
                See Less
              </span>
            )}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default About;
