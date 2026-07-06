type Experience = {
  position: string;
  company: string;
  technologies: string[];
  period: string;
  description: string[];
};

export const experiences: Experience[] = [
  {
    position: "Software Engineer (Volunteer)",
    company: "One Community Global",
    technologies: ["React", "MongoDB", "Node.js", "Express.js"],
    period: "June 2026 - Present",
    description: [
      "Worked on the open-source Highest Good Network application using React, Express.js, Node.js & MongoDB.",
      "Developed a job application analytics feature to compare completion times and volume of applications per role.",
    ],
  },
  {
    position: "Freelance Web Developer",
    company: "Remote",
    technologies: ["Gatsby", "Next.js", "Tailwind CSS"],
    period: "May 2022 - May 2023",
    description: [
      "Delivered high-performing, responsive websites for Malaysian enterprise clients using Next.js and Gatsby.",
      "Designed user-centered Figma prototypes based on client requirements.",
      "Improved website content with copywriters, ensuring 100% alignment between visual design and messaging.",
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
      "Express.js",
      "Redux",
      "Sass",
      "Blueprint JS",
    ],
    description: [
      "Developed a chatbot-based automation system for Malaysian businesses in retail, e-commerce, manufacturing, etc. using React/TypeScript, Express.js, Node.js, MongoDB, Redux, and Sass.",
      "Implemented a multi-channel feature, allowing users to seamlessly integrate chatbots across both WhatsApp and Telegram, designing REST API for tenant platforms, and building functional React components from Figma.",
      "Implemented a Glide Data Grid to handle large-scale data, including lazy loading, context menu, search, etc.",
    ],
  },
];
