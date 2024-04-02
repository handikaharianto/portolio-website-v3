"use client";

import ExperienceTab from "@/app/_components/experience-tab";

export default function Experience() {
  return (
    <section id="experience">
      <div className="mx-auto max-w-7xl space-y-20 px-6 py-20 md:py-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-y-4">
          <div className="rounded-full bg-zinc-100 px-3 py-1.5 text-sm font-medium tracking-wider text-zinc-800">
            EXPERIENCE
          </div>
          <h2 className="text-center text-4xl font-medium !leading-tight md:text-5xl">
            My past work experience in a nutshell.
          </h2>
        </div>
        <div className="mx-auto max-w-3xl">
          <ExperienceTab />
        </div>
      </div>
    </section>
  );
}
