import { ReactNode } from "react";

type ResumeButtonProps = {
  className?: string;
  [key: string]: ReactNode;
};

export default function ResumeButton({
  className,
  ...props
}: ResumeButtonProps) {
  return (
    <a
      href="#"
      className={`group relative hidden cursor-pointer rounded-full bg-blue-600 p-px text-sm font-semibold leading-6 text-white no-underline shadow-md md:inline-block ${className}`}
      {...props}
    >
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div className="relative z-10 flex items-center space-x-2 rounded-full bg-blue-600 px-4 py-0.5">
        <span>Resume</span>
        <svg
          fill="none"
          height="16"
          viewBox="0 0 24 24"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 group-hover:translate-x-1"
        >
          <path
            d="M10.75 8.75L14.25 12L10.75 15.25"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </a>
  );
}
