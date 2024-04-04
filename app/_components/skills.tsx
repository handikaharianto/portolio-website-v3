import React from "react";
import { skills } from "@/app/_data/skills";
import SkillsItem from "@/app/_components/skills-item";

export default function Skills() {
  return (
    <section id="skills">
      <div className="mx-auto max-w-7xl rounded-2xl bg-zinc-50 px-6 py-20 md:py-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-y-4">
          <div className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium tracking-wider text-blue-500">
            SKILLS
          </div>
          <h2 className="text-center text-4xl font-medium !leading-tight text-zinc-800 md:text-5xl">
            Bring out seamless functionalities with various technologies.
          </h2>
        </div>
        <div className="mt-20 grid grid-cols-2 gap-8 px-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:px-16 xl:grid-cols-6">
          {skills.map((skill) => (
            <SkillsItem key={skill.title} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
