import type { User } from "@prisma/client";
import type { ProjectExpanded } from "~/utils/types";

import { ProjectCard } from "~/components/ProjectCard";

type DashboardSectionProps = {
  title: string;
};

const DashboardSection: React.FC<DashboardSectionProps> = ({
  title,
  children,
}) => {
  return (
    <div className="p-6 bg-white rounded-xl">
      <h3 className="mb-6 text-lg font-medium text-fg-secondary">{title}</h3>

      {children}
    </div>
  );
};

type DashboardViewProps = {
  user: User;
  projects: ProjectExpanded[];
};

export const DashboardView = ({ user, projects }: DashboardViewProps) => {
  return (
    <div className="w-full h-min p-6">
      <h1 className="text-2xl text-fg-primary font-bold pb-8">
        Hey! {user.name}
      </h1>

      <DashboardSection title="Featured Project">
        <div className="flex">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </DashboardSection>
    </div>
  );
};
