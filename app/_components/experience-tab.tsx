import { Tab } from "@headlessui/react";

import { experiences } from "@/app/_data/experiences";
import clsx from "clsx";
import { Fragment } from "react";
import { motion } from "framer-motion";

function PlayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-blue-600"
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
      className="relative space-y-8 md:flex md:space-x-8 md:space-y-0"
    >
      <Tab.List className="flex md:flex-col">
        <div className="relative">
          {experiences.map((experience) => (
            <Tab key={experience.company} as={Fragment}>
              {({ selected }) => (
                <button
                  className={clsx(
                    "relative px-4 py-3 text-left font-semibold transition duration-300 focus:outline-none",
                    selected ? "text-blue-600" : "hover:text-blue-600",
                  )}
                >
                  {experience.company}
                  {selected && (
                    <motion.div
                      layoutId="underline"
                      transition={{
                        ease: "backInOut",
                        duration: 0.3,
                      }}
                      className="absolute bottom-0 left-0 z-10 h-[3px] w-full rounded-full bg-blue-600 md:top-0 md:h-full md:w-[3px]"
                    ></motion.div>
                  )}
                </button>
              )}
            </Tab>
          ))}
          <div className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-blue-100 md:top-0 md:h-full md:w-[3px]"></div>
        </div>
      </Tab.List>
      <Tab.Panels className="*:py-2">
        {experiences.map((experience, index) => (
          <Tab.Panel
            key={`${experience}-${index}`}
            className="space-y-4 focus:outline-none"
          >
            <div className="space-y-1">
              <h3 className="text-xl font-bold tracking-wide md:text-2xl">
                <span className="text-gray-900">{experience.position}</span>{" "}
                <span className="text-blue-600">@ {experience.company}</span>
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
            <div className="flex flex-wrap gap-3">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-blue-50 px-2 py-1 text-sm font-medium text-blue-600 shadow-sm ring-1 ring-inset ring-blue-100"
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
