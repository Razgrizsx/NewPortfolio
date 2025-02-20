import spartanvideo from "../img/spartanvideo.png";
import Fitness from "../img/fitness.PNG";
import Events from "../img/Events.PNG";
import WebApp from "../img/webapp.PNG";
import UiTool from "../img/UiTool.png";
import LinkZ from "../img/linkz.png";
import VDGames from "../img/VDGames.png";
import Dager from "../img/dager.png";

const projects = [
  {
    title: "SpartanVideo",
    subTitle: "Video Streaming",
    description:
      "SpartanVideo is a video streaming application that allows users to create an account and watch videos. It is built using Nextjs and is deployed on Vercel.",
    image: spartanvideo,
    technologies: [
      "NextJS",
      "TailwindCSS",
      "JavaScript",
      "TypeScript",
      "NodeJS",
      "Express",
      "MongoDB",
      "Webpack",
      "NextAuth",
      "Vercel"
    ],
    github: "https://github.com/Razgrizsx/Spartan-Video",
    live: "https://spartan-video.vercel.app/",
    demoAccount: {
      username: "admin@admin.com",
      password: "admin"
    }
  },
  {
    title: "Fitness",
    subTitle: "Fitness App",
    description:
      "Fitness is a web application is a template for a fitness app where people can read about the bussiness, contact the owners and register",
    image: Fitness,
    technologies: [
      "ReactJS",
      "Vite",
      "Redux",
      "TailwindCSS",
      "TypeScript",
      "TailWind",
      "Webpack",
      "Vercel"
    ],
    github: "https://github.com/Razgrizsx/Fitness_App",
    live: "https://fitness-app-tawny.vercel.app/"
  },
  {
    title: "UiTool",
    subTitle: "No code Editor",
    description:
      "UiTool is a no code app that let the users create web apps, posts, emails among other things. Then the user can share those with the world.",
    image: UiTool,
    technologies: [
      "NextJS",
      "TailwindCSS",
      "TypeScript",
      "NodeJS",
      "Express",
      "MongoDB",
      "Drag and Drop"
    ],
    github: "",
    live: "https://uitool-dev.vercel.app"
  },
  {
    title: "Dot Dager",
    subTitle: "Landing Page",
    description:
      "This is a page my team in Abstract and i made for the youtuber Dot Dager as part of a competition, it contains a good amount of technologies like 3d models and lighting",
    image: Dager,
    technologies: [
      "ReactJs",
      "CSS",
      "Tailwind",
      "TypeScript",
      "React three fiber",
      "ThreeJs"
    ],
    github: "",
    live: "https://dot-dager-pickles.netlify.app"
  },
  {
    title: "LinkZ",
    subTitle: "List of Links",
    description:
      "LinkZ is an app that let the users create list of links to their social media or any other site that they want, it offers a variety of options to customize the links (currently under development)",
    image: LinkZ,
    technologies: ["ReactJs", "TailwindCSS", "TypeScript", "NestJs", "MongoDB"],
    github: "",
    live: "https://linkz-client.vercel.app/auth"
  },
  {
    title: "WebStore",
    subTitle: "E-commerce",
    description:
      "WebStore is an ecommerce, it includes the marketplace, cart and payment.",
    image: WebApp,
    technologies: [
      "Angular",
      "CSS",
      "Tailwind",
      "TypeScript",
      "Stripe",
      "NodeJs",
      "Express",
      "Webpack",
      "Vercel"
    ],
    github: "https://github.com/Razgrizsx/WebStore-Angular",
    live: "https://web-store-angular.vercel.app/home"
  },
  {
    title: "VDGames",
    subTitle: "E-commerce",
    description:
      "VDGames is an videogame ecommerce that simulates steam, it was part of a project for a bootcamp. It includes the list of products, cart, payment, dashboard, login with security, newsletter.",
    image: VDGames,
    technologies: [
      "ReactJs",
      "CSS",
      "Tailwind",
      "TypeScript",
      "Stripe",
      "NodeJs",
      "Express",
      "Webpack",
      "Vercel"
    ],
    github: "https://github.com/madrizjosea/EVideogames",
    live: ""
  },
  {
    title: "Spartan Events",
    subTitle: "Tourism",
    description:
      "Spartan Events is a simple app where the user can look up events in different cities.",
    image: Events,
    technologies: ["NextJs", "CSS", "JavaScript", "Webpack", "Vercel"],
    github: "https://github.com/Razgrizsx/Events-App-Nextjs",
    live: "https://spartanevents.vercel.app/events/barcelona"
  }
];

export default projects;
