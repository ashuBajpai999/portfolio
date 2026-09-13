import ArrowDownward from "@mui/icons-material/ArrowDownward";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import { Avatar, Box, Chip, IconButton, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../App.css";
import "../Assets/CSS/Home.css";
import img from "../Assets/Images/ashutosh.webp";
import { SOCIAL_LINKS, TECH_STACK } from "../constants/portfolioData";
import { getFileUrl } from "../services/storageService";

const Home = () => {
  const handleClick = (icon) => {
    switch (icon) {
      case "Facebook":
        window.open(
          "https://m.facebook.com/profile.php/?id=100004580445865&name=xhp_nt__fb__action__open_user",
          "_blank",
        );
        break;
      case "Instagram":
        window.open("https://instagram.com/surya9870/", "_blank");
        break;
      case "Github":
        window.open("https://github.com/ashuBajpai999/", "_blank");
        break;
      case "LinkedIn":
        window.open(
          "https://in.linkedin.com/in/ashutosh-bajpai-6b8baa152",
          "_blank",
        );
        break;
      default:
        break;
    }
  };

  const downloadCV = () => {
    try {
      // Get the download URL
      const cvUrl = getFileUrl("cvStore", "ASHUTOSH_BAJPAI.pdf");

      const link = window.document.createElement("a");
      link.href = `${cvUrl}?download=Ashutosh_Bajpai_CV.pdf`;
      link.download = "ASHUTOSH_BAJPAI.pdf";

      window.document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading CV:", error);
    }
  };

  const startDate = new Date("2023-02-25");
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const experience =
    months === 0 ? `${years}` : `${(years + months / 12).toFixed(1)}`;

  return (
    <Box component="main" className="hero-section" id="home">
      <Box className="hero-background-pattern" />
      <Box className="hero-container">
        {/* Content */}
        <Box className="hero-content">
          <Typography className="hero-eyebrow">
            FULL STACK .NET DEVELOPER
          </Typography>

          <Typography component="p" className="hero-greeting">
            Hi, I'm
          </Typography>

          <Typography component="h1" className="hero-title">
            Ashutosh <span>Bajpai</span>
          </Typography>

          <Typography className="hero-description">
            I'm a Full Stack .NET Developer with {experience}+ years of
            experience in designing and developing scalable web applications
            using ASP.NET Core, C#, and modern frontend technologies like
            React.js, Redux, and Material UI.
          </Typography>

          {/* Tech Stack */}
          <Stack direction="row" flexWrap="wrap" gap={1} className="tech-stack">
            {TECH_STACK.map((technology) => (
              <Chip
                icon={
                  <img
                    src={technology.icon}
                    style={{ width: 20, height: 20, ...technology.css }}
                  />
                }
                key={technology.label}
                label={technology.label}
                variant="outlined"
                className="tech-chip"
              />
            ))}
          </Stack>

          {/* CTA */}
          <Box className="hero-actions">
            <Button
              variant="contained"
              onClick={downloadCV}
              endIcon={<ArrowDownward />}
              className="download-cv-button"
            >
              Download CV
            </Button>
          </Box>

          {/* Experience */}
          <Box className="experience-block">
            <CalendarMonthRoundedIcon />

            <Box>
              <Typography className="experience-number">
                {experience}+
              </Typography>

              <Typography className="experience-label">
                Years Experience
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Portrait */}
        <Box className="hero-visual">
          <Box className="portrait-orbit">
            <Avatar src={img} alt="Ashutosh Bajpai" className="hero-portrait" />
            <Box className="orbit-ring">
              {SOCIAL_LINKS.map((social, index) => {
                const SocialIcon = social.icon;

                return (
                  <IconButton
                    key={social.label}
                    aria-label={social.label}
                    onClick={() => handleClick(social.label)}
                    className={`orbit-icon orbit-icon-${index + 1}`}
                    disabled={!social.url}
                  >
                    <SocialIcon className="socialIconSize" />
                  </IconButton>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
