// import { GitHubIcon, LinkedInIcon } from "@/app/_components/social-icons";

export default function Hero() {
  return (
    <section id="about">
      <div className="mx-auto grid max-w-7xl gap-y-6 p-6 py-52 md:py-32 xl:px-0">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl font-bold !leading-tight text-zinc-800 md:text-6xl ">
            Hey there! My name is Handika 👋🏻
          </h1>
          <p className="text-lg leading-relaxed tracking-wide text-zinc-600 md:text-xl">
            I&apos;m a recent CS graduate and Full Stack Developer who&apos;s
            passionate about making web applications look pretty ✨
            <br />
            <br />
            Aside from web development, I&apos;m currently exploring UI/UX
            design.
          </p>
        </div>
        <div className="flex items-center gap-x-4">
          <a href="https://github.com/handikaharianto" target="_blank">
            {/* <GitHubIcon className="h-7 w-7 fill-zinc-500 transition duration-300 hover:fill-zinc-700" /> */}
          </a>
          <a
            href="https://www.linkedin.com/in/handika-harianto-ew-jong/"
            target="_blank"
          >
            {/* <LinkedInIcon className="h-7 w-7 fill-zinc-500 transition duration-300 hover:fill-zinc-700" /> */}
          </a>
        </div>
      </div>
    </section>
  );
}
