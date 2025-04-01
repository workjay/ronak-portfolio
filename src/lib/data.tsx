import { Github } from "lucide-react";

import LogoJavascript from "/public/images/logos/javascript.svg";
import LogoTypescript from "/public/images/logos/typescript.svg";
import LogoReact from "/public/images/logos/react.svg";
import LogoNextjs from "/public/images/logos/nextjs.svg";
import LogoNodejs from "/public/images/logos/nodejs.svg";
import LogoExpress from "/public/images/logos/express.svg";
import LogoExpressLight from "/public/images/logos/express-light.svg";
import LogoNest from "/public/images/logos/nest.svg";
import LogoSocket from "/public/images/logos/socket.svg";
import LogoSocketLight from "/public/images/logos/socket-light.svg";
import LogoMySQL from "/public/images/logos/mysql.svg";
import LogoPostgreSQL from "/public/images/logos/postgresql.svg";
import LogoMongoDB from "/public/images/logos/mongodb.svg";
import LogoRedis from "/public/images/logos/redis.svg";
import LogoSass from "/public/images/logos/sass.svg";
import LogoTailwindcss from "/public/images/logos/tailwindcss.svg";
import LogoMui from "/public/images/logos/mui.svg";
import LogoRedux from "/public/images/logos/redux.svg";
import LogoOpenai from "/public/images/logos/openai.svg";
import LogoAWS from "/public/images/logos/aws.svg";
import LogoVercel from "/public/images/logos/vercel.svg";
import LogoStrapi from "/public/images/logos/strapi.svg";
import LogoLaravel from "/public/images/logos/laravel.svg";
import LogoSequelize from "/public/images/logos/sequelize.svg";
import LogoMongoose from "/public/images/logos/mongoose.svg";
import LogoHTML from "/public/images/logos/html.svg";
import LogoCSS from "/public/images/logos/css.svg";
import LogoGit from "/public/images/logos/git.svg";

import LogoUpwork from "/public/images/logos/upwork.svg";

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/dev-ronak-patel",
  GITHUB_REPO: "https://github.com/workjay/ronak-portfolio",
};

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Work",
    href: "#work",
  },
  // {
  //   label: "Testimonials",
  //   href: "#testimonials",
  // },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/dev-ronak-patel",
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Laravel",
    logo: LogoLaravel,
    url: "https://laravel.com/",
  },
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "Express.js",
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: "https://expressjs.com/",
  },
  {
    label: "Nest.js",
    logo: LogoNest,
    url: "https://nestjs.com/",
  },
  {
    label: "Socket.io",
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: "https://socket.io/",
  },
  {
    label: "MySQL",
    logo: LogoMySQL,
    url: "https://www.mysql.com/",
  },
  {
    label: "PostgreSQL",
    logo: LogoPostgreSQL,
    url: "https://www.postgresql.org/",
  },
  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    label: "Redis",
    logo: LogoRedis,
    url: "https://redis.io/",
  },
  {
    label: "Sequelize",
    logo: LogoSequelize,
    url: "https://sequelize.org/",
  },
  {
    label: "Mongoose",
    logo: LogoMongoose,
    url: "https://mongoosejs.com/",
  },
  {
    label: "HTML",
    logo: LogoHTML,
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    label: "CSS",
    logo: LogoCSS,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    label: "Sass/Scss",
    logo: LogoSass,
    url: "https://sass-lang.com/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Material UI",
    logo: LogoMui,
    url: "https://mui.com/",
  },
  {
    label: "Redux",
    logo: LogoRedux,
    url: "https://redux.js.org/",
  },
  {
    label: "Open AI",
    logo: LogoOpenai,
    url: "https://platform.openai.com/",
  },
  {
    label: "AWS",
    logo: LogoAWS,
    url: "https://aws.amazon.com/",
  },
  {
    label: "Vercel",
    logo: LogoVercel,
    url: "https://vercel.com/",
  },
  {
    label: "Strapi",
    logo: LogoStrapi,
    url: "https://strapi.io/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoUpwork,
    logoAlt: "Upwork logo",
    url: "https://upwork.com/freelancers/ronupatel?mp_source=share",
    position: "Freelancer",
    startDate: new Date(2015, 7),
    currentlyWorkHere: true,
    summary: [
      "As a Full-Stack Developer, I continued working with React, Next.js, Node.js, Laravel, Nest.js, MySQL, and PostgreSQL",
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "Bookify.AI",
    description:
      "We built a platform that allows users to interact with PDFs, books, documents, websites, YouTube videos, and more using AI-powered chat. Designed for students, researchers, and professionals, this tool transforms the way people learn and access information by enabling seamless AI-driven conversations with various content sources.",
    url: "https://www.bookify.ai/",
    previewImage: "/images/projects/bookify.png",
    technologies: [
      "Next.js",
      "Laravel",
      "MySQL",
      "OpenAI API",
      "Stripe",
      "Material UI",
    ],
    title: "Full Stack Developer",
  },
  {
    name: "Boltify.AI",
    description:
      "Boltify is a lead management system that automates meetings through cold calls and follow-ups from Google Maps. Designed for agencies, teams, startups, and B2B businesses, it streamlines lead generation and engagement with local businesses, making the process faster and more efficient.",
    url: "https://www.boltify.ai/",
    previewImage: "/images/projects/boltify.png",
    technologies: [
      "Next.js",
      "Laravel",
      "MySQL",
      "Google Places API",
      "Stripe",
      "Material UI",
    ],
    title: "Full Stack Developer",
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "Krisztian Gyuris",
    personAvatar: "",
    title: "Founder - inboxgenie.io",
    testimonial:
      "Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.",
  },
];
