import ReactLogo from "../assets/react.png";
import JavaScript from "../assets/javascript.png";
import Html from "../assets/html.png";
import CssLogo from "../assets/css.png";
import Github from "../assets/github.png";
import TailwindCss from "../assets/tailwindcss.png";
import Gym from "../assets/gym.png";
import Reflix from "../assets/reflix.png";
import Shazam from "../assets/shazam.png";

const skills = [
  {
    url: Html,
    name: "HTML",
    title: "html logo",
  },
  {
    url: CssLogo,
    name: "CSS",
    title: "CSS logo",
  },
  {
    url: JavaScript,
    name: "Javascript",
    title: "Javascript logo",
  },
  {
    url: ReactLogo,
    name: "React JS",
    title: "React logo",
  },
  {
    url: Github,
    name: "Github",
    title: "Github logo",
  },
  {
    url: TailwindCss,
    name: "TailwindCss",
    title: "TailwindCss logo",
  },
];

const works = [
  {
    image: Gym,
    title: "react-gym",
    url: "https://gym-tutor.netlify.app",
    source: "https://github.com/hoangtrung2000/react-exerciseDB",
  },
  {
    image: Reflix,
    title: "react-movie",
    url: "https://react-movie-c82e0.web.app/",
    source: "https://github.com/hoangtrung2000/react-movies",
  },
  {
    image: Shazam,
    title: "react-shazam",
    url: "https://nht-shazam.netlify.app",
    source: "https://github.com/hoangtrung2000/musicShazamAPI",
  },
];

export { skills, works };
