type Experience = {
  position: string;
  company: string;
  technologies: string[];
  period: string;
  description: string[];
};

export const experiences: Experience[] = [
  {
    position: "Freelance Web Developer",
    company: "Remote",
    technologies: ["Gatsby", "Next.js", "Tailwind CSS"],
    period: "May 2022 - May 2023",
    description: [
      "Developed responsive websites for clients in big data and IT services companies with modern frontend frameworks like Next.js and Gatsby.",
      "Constructed user-centered designs based on user requirements using Figma.",
      "Collaborated closely with a copywriter to align the contents with web designs.",
    ],
  },
  {
    position: "Full Stack Developer Intern",
    company: "Tinkerve",
    period: "August 2022 - November 2022",
    technologies: [
      "React",
      "MongoDB",
      "Node.js",
      "Express",
      "Redux",
      "Sass",
      "Blueprint JS",
    ],
    description: [
      "Developed a full stack web application for a chatbot-based automation system named Digital Workspace Assistant using React/Typescript, ExpressJS, NodeJS, and MongoDB.",
      "Implemented a multi-channel feature that allows businesses to create their own chatbot on both WhatsApp and Telegram platform.",
      "Continued the development of custom data table to manage user data by implementing various functionalities, such as server-side pagination, context menu, etc.",
    ],
  },
];
