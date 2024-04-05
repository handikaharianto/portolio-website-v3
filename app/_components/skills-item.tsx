import { Skill } from "@/app/_data/skills";
import Image from "next/image";

type SkillsItemProps = {
  skill: Skill;
};

export default function SkillsItem({ skill }: SkillsItemProps) {
  const { title, image } = skill;

  return (
    <div className="flex flex-col items-center justify-center rounded-2xl bg-white py-6 shadow-sm transition ease-in-out hover:scale-105 hover:shadow-md">
      <div className="flex flex-col items-center justify-center gap-y-4">
        <Image src={image} alt={title} width={70} height={70} />
        <p className="text-center font-medium tracking-wide text-zinc-800">
          {title}
        </p>
      </div>
    </div>
  );
}
