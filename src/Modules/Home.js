import ArrowDownward from "@mui/icons-material/ArrowDownward";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import "../App.css";
import "../Assets/CSS/Home.css";
import img from "../Assets/Images/ashutosh.webp";
import { getFileUrl } from "../services/storageService";

const Home = () => {
  const theme = useTheme();
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
      case "Linkedln":
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
  return (
    <Grid container className="main1">
      <Grid item md={7} xs={12} sm={7} className="objective">
        <div
        // style={{ marginBottom: "10px" }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "sans",
              textDecoration: "underline",
              textAlign: "center",
            }}
          >
            My Objective
          </Typography>
        </div>
        <div>
          <Typography
            variant="h6"
            sx={{
              margin: "2rem",
              textAlign: "justify",
            }}
          >
            Full Stack .NET Developer with 3+ years of experience designing and
            developing enterprise web applications using ASP.NET Core, ASP.NET
            MVC, ASP.NET Web Forms, C#, React.js, Entity Framework, PostgreSQL,
            and FirebirdSQL. Experienced in developing scalable backend APIs,
            building reusable React components, database optimization, and
            delivering production-ready business applications. Passionate about
            clean architecture, performance optimization, and continuous
            learning
          </Typography>
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          <Button
            onClick={downloadCV}
            variant="contained"
            color="primary"
            endIcon={
              <ArrowDownward
                sx={{
                  width: 30,
                  height: 30,
                  ml: 1,
                  border: "2px solid black",
                  borderRadius: "50%",
                }}
              ></ArrowDownward>
            }
            sx={{
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
              },
              color: "black",
              marginBottom: "3vw",
            }}
          >
            Download CV
          </Button>
        </div>
      </Grid>
      <Grid item md={5} xs={12} sm={5} className="orbit">
        <Grid container className="center-container">
          <Grid item className="orbit-ring">
            <FacebookIcon
              className="orbit2-circle"
              fontSize="large"
              onClick={() => {
                handleClick("Facebook");
              }}
            />
            <InstagramIcon
              className="orbit3-circle"
              fontSize="large"
              onClick={() => {
                handleClick("Instagram");
              }}
            />
            <LinkedInIcon
              className="orbit4-circle"
              fontSize="large"
              onClick={() => {
                handleClick("Linkedln");
              }}
            />
            <GitHubIcon
              className="orbit1-circle"
              fontSize="large"
              onClick={() => {
                handleClick("Github");
              }}
            />
          </Grid>
          <Grid item className="center-circle-avtar">
            <img className="center-circle" src={img} alt="ashutosh.jpg" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
