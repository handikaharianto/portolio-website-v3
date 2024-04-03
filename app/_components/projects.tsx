import { GitHubIcon, IconProps } from "@/app/_components/social-icons";
import { projects } from "@/app/_data/projects";

function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="mx-auto max-w-7xl space-y-20 px-6 py-20 md:py-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-y-4">
          <div className="rounded-full bg-zinc-100 px-3 py-1.5 text-sm font-medium tracking-wider text-zinc-800">
            PROJECTS
          </div>
          <h2 className="text-center text-4xl font-medium !leading-tight md:text-5xl">
            Things I&apos;ve built so far.
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative flex flex-col gap-y-8 overflow-hidden rounded-xl border border-gray-100 p-6 shadow-sm transition duration-300 hover:border-gray-200 hover:shadow-md"
            >
              <div className="space-y-2">
                <h3 className="text-lg font-bold tracking-wide">
                  {project.title}
                </h3>
                <p>{project.description}</p>
              </div>
              <div className="mt-auto flex flex-wrap gap-x-2 gap-y-1">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-white/50 opacity-0 backdrop-blur transition duration-300 ease-in-out group-hover:opacity-100">
                <div>
                  {project.gitHubUrl && (
                    <a href={project.gitHubUrl} target="_blank">
                      <GitHubIcon className="h-7 w-7 fill-zinc-500 transition duration-300 hover:fill-zinc-700" />
                    </a>
                  )}
                </div>
                <div className="absolute right-0 top-0 -translate-y-5 translate-x-5 opacity-0 transition duration-300 ease-in-out group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:opacity-100">
                  <ArrowUpRightIcon className="stroke-gray-900" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
