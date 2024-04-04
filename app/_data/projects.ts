type Project = {
  title: string;
  description: string;
  technologies: string[];
  gitHubUrl?: string;
  websiteUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Foodly",
    description:
      "A web-based food donation system to facilitate food donation tracking and management.",
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "TypeScript",
      "Mantine",
      "Socket.IO",
      "Mapbox",
    ],
    gitHubUrl: "https://github.com/handikaharianto/foodly",
  },
  {
    title: "URL Shortener",
    description: "A full stack web application to truncate long URLs.",
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "JavaScript",
      "Tailwind CSS",
    ],
    gitHubUrl: "https://github.com/handikaharianto/url-shortener",
  },
  {
    title: "Budgeting App",
    description:
      "A money tracking platform to prevent users from impulse purchases.",
    technologies: ["React", "JavaScript", "Material UI", "Firebase"],
    gitHubUrl: "https://github.com/klm4life/BudgetingApp",
  },
  {
    title: "COVID-19 Tracker",
    description:
      "A web application to keep track of COVID-19 cases around the globe.",
    technologies: ["React", "JavaScript", "Sass"],
    gitHubUrl: "https://github.com/handikaharianto/covid19-tracker",
    websiteUrl: "https://han-covid-19-tracker.netlify.app/",
  },
  {
    title: "Movie Search",
    description: "A movie search app that provides an overview of movies.",
    technologies: ["React", "JavaScript", "CSS"],
    gitHubUrl: "https://github.com/handikaharianto/OMDb-api",
    websiteUrl: "https://movie-search-omdb-api.netlify.app/",
  },
];
