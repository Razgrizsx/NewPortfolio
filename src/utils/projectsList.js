import spartanvideo from "../img/spartanvideo.png"
import Fitness from "../img/fitness.PNG"
import Events from "../img/Events.PNG"
import WebApp from "../img/webapp.PNG"

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
      "Vercel",
    ],
    github: "https://github.com/Razgrizsx/Spartan-Video",
    live: "https://spartan-video.vercel.app/",
    demoAccount: {
      username: "admin@admin.com",
      password: "admin",
    },
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
      "Vercel",
    ],
    github: "https://github.com/Razgrizsx/Fitness_App",
    live: "https://fitness-app-tawny.vercel.app/",
  },
  {
    title: "WebStore",
    subTitle: "ecommerce",
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
      "Vercel",
    ],
    github: "https://github.com/Razgrizsx/WebStore-Angular",
    live: "https://web-store-angular.vercel.app/home",
  },
  {
    title: "Spartan Events",
    subTitle: "Tourism",
    description:
      "Spartan Events is a simple app where the user can look up events in different cities.",
    image: Events,
    technologies: [
      "NextJs",
      "CSS",
      "JavaScript",
      "Webpack",
      "Vercel",
    ],
    github: "https://github.com/Razgrizsx/Events-App-Nextjs",
    live: "https://spartanevents.vercel.app/events/barcelona",
  },
];

export default projects;