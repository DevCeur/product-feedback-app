import type { ProjectWithSuggestions } from "~/utils/types";

type ProjectBannerProps = {
  project: ProjectWithSuggestions;
};

export const ProjectBanner = ({ project }: ProjectBannerProps) => {
  return (
    <div className="w-full h-full lg:h-36 p-4 lg:p-6 flex flex-col justify-end bg-project-gradient bg-[length:600px] bg-right-bottom rounded-xl">
      <h3 className="text-xl font-bold text-white mb-1">{project.name}</h3>
      <p className="text-sm text-fg-overlay">Feedback Board</p>
    </div>
  );
};
