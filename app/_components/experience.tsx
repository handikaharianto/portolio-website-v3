"use client";

import ExperienceTab from "@/app/_components/experience-tab";

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden">
      <div className="absolute -left-56 top-[500px] -z-10 h-full w-full bg-[url('/circle-scatter-small.svg')] bg-no-repeat md:-left-56 md:top-[450px] 2xl:left-1/3"></div>
      <div className="absolute left-24 top-0 -z-10 h-full w-full bg-[url('/circle-scatter-medium.svg')] bg-no-repeat md:left-1/2 md:top-24"></div>
      <div className="mx-auto max-w-7xl space-y-20 px-6 py-20 md:py-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-y-4">
          <div className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium tracking-wider text-blue-500">
            EXPERIENCE
          </div>
          <h2 className="text-center text-4xl font-medium !leading-tight text-zinc-800 md:text-5xl">
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
