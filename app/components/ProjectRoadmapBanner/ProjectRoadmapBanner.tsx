import { Link } from "@remix-run/react";

import type { ProjectExpanded } from "~/utils/types";

const Dot = ({ color }: { color: string }) => {
  return <div className={`w-2 h-2 rounded-full ${color}`} />;
};

type RoadmapCategoryProps = {
  name: "Planned" | "In-Progress" | "Live";
  color: string;
  count: number;
};

const RoadmapCategegory = ({ count, name, color }: RoadmapCategoryProps) => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center space-x-4">
        <Dot color={color} /> <p className="text-fg-secondary">{name}</p>
      </div>

      <p className="text-fg-secondary font-bold">{count}</p>
    </div>
  );
};

type ProjectRoadmapBannerProps = {
  project: ProjectExpanded;
};

export const ProjectRoadmapBanner = ({
  project,
}: ProjectRoadmapBannerProps) => {
  const totalPlanned = project.suggestions.filter(
    (suggestion) => suggestion.status === "PLANNED"
  ).length;

  const totalInProgess = project.suggestions.filter(
    (suggestion) => suggestion.status === "IN_PROGRESS"
  ).length;

  const totalLive = project.suggestions.filter(
    (suggestion) => suggestion.status === "LIVE"
  ).length;

  return (
    <div className="bg-white p-4 lg:p-6 rounded-xl">
      <div className="mb-6 flex justify-between items-center">
        <h4 className="text-lg text-fg-primary font-bold">Roadmap</h4>

        <Link
          to={`/project/${project.id}/roadmap`}
          className="text-sm text-brand-blue-primary underline hover:text-brand-blue-primary-light transition-colors duration-200"
        >
          View
        </Link>
      </div>

      <div className="flex flex-col space-y-2">
        <RoadmapCategegory
          name="Planned"
          color="bg-brand-orange"
          count={totalPlanned}
        />

        <RoadmapCategegory
          name="In-Progress"
          color="bg-brand-purple"
          count={totalInProgess}
        />

        <RoadmapCategegory
          name="Live"
          color="bg-brand-blue-secondary"
          count={totalLive}
        />
      </div>
    </div>
  );
};
