import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import dotnetcoreicon from "devicon/icons/dotnetcore/dotnetcore-original.svg";
import csharpicon from "devicon/icons/csharp/csharp-original.svg";
import reacticon from "devicon/icons/react/react-original.svg";
import reduxicon from "devicon/icons/redux/redux-original.svg";
import muiicon from "devicon/icons/materialui/materialui-original.svg";
import javascripticon from "devicon/icons/javascript/javascript-original.svg";
import postmanicon from "devicon/icons/postman/postman-original.svg";
import postgresqlicon from "devicon/icons/postgresql/postgresql-original.svg";
import giticon from "devicon/icons/git/git-original.svg";
import { borderRadius } from "@mui/system";

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#project" },
  { label: "Qualification", href: "#qualification" },
  { label: "Skills", href: "#skills" },
];

export const TECH_STACK = [
  {
    label: "ASP.NET Core",
    icon: dotnetcoreicon,
  },
  {
    label: "C#",
    icon: csharpicon,
  },
  {
    label: "React.js",
    icon: reacticon,
  },
  {
    label: "Redux",
    icon: reduxicon,
  },
  {
    label: "JavaScript",
    icon: javascripticon,
    css: { borderRadius: "20%" },
  },
  {
    label: "Postman",
    icon: postmanicon,
  },
  {
    label: "PostgreSQL",
    icon: postgresqlicon,
  },
  {
    label: "GIT",
    icon: giticon,
  },
  {
    label: "Material UI",
    icon: muiicon,
  },
];

export const SOCIAL_LINKS = [
  {
    label: "Github",
    className: "orbit1-circle",
    url: "https://github.com/ashuBajpai999/",
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    className: "orbit4-circle",
    url: "https://in.linkedin.com/in/ashutosh-bajpai-6b8baa152",
    icon: LinkedInIcon,
  },
  {
    label: "Instagram",
    className: "orbit3-circle",
    url: "https://instagram.com/surya9870/",
    icon: InstagramIcon,
  },
  {
    label: "Facebook",
    className: "orbit2-circle",
    url: "https://m.facebook.com/profile.php/?id=100004580445865&name=xhp_nt__fb__action__open_user",
    icon: FacebookIcon,
  },
];
