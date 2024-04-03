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
      "A web-based food donation system to facilitate Malaysians in food donation tracking and management.",
    technologies: [
      "MongoDB",
      "ExpressJS",
      "React",
      "NodeJS",
      "Mantine",
      "Socket.IO",
    ],
    gitHubUrl: "https://github.com/handikaharianto/foodly",
  },
  {
    title: "URL Shortener",
    description: "A full stack web application to truncate long URLs.",
    technologies: ["MongoDB", "ExpressJS", "React", "NodeJS", "Tailwind CSS"],
    gitHubUrl: "https://github.com/handikaharianto/url-shortener",
  },
];
