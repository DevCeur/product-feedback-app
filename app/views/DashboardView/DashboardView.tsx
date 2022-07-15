import type { Project } from "@prisma/client";
import { Link } from "@remix-run/react";

type DashboardViewProps = {
  projects: Project[];
};

export const DashboardView = ({ projects }: DashboardViewProps) => {
  return (
    <div>
      <h1>Dashboard</h1>

      <div>
        {projects.map((project) => (
          <Link key={project.id} to={`/project/${project.id}`}>
            {project.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
