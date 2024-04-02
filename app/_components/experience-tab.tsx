import { Tab } from "@headlessui/react";

import { experiences } from "@/app/_data/experiences";

function PlayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}

export default function ExperienceTab() {
  return (
    <Tab.Group
      vertical
      as="div"
      className="space-y-8 md:flex md:space-x-8 md:space-y-0"
    >
      <Tab.List className="flex md:flex-col">
        {experiences.map((experience) => (
          <Tab
            key={experience.company}
            className="border-b-[3px] border-gray-300 px-4 py-3 text-left font-semibold md:border-b-0 md:border-l-[3px]"
          >
            {experience.company}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="*:py-2">
        {experiences.map((experience, index) => (
          <Tab.Panel key={`${experience}-${index}`} className="space-y-4">
            <div className="space-y-1">
              <h3 className="text-xl font-bold tracking-wide md:text-2xl">
                <span className="text-gray-900">{experience.position}</span>{" "}
                <span className="">@ {experience.company}</span>
              </h3>
              <p className="text-sm md:text-base">{experience.period}</p>
            </div>
            <ul className="space-y-2">
              {experience.description.map((desc, index) => (
                <li key={index} className="relative flex gap-x-2 pl-8">
                  <div className="absolute left-0 top-1.5">
                    <PlayIcon />
                  </div>
                  <span className="md:text-lg">{desc}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-gray-50 px-2 py-1 text-sm font-medium text-gray-600 shadow-sm ring-1 ring-inset ring-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}