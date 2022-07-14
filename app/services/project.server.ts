import { prisma } from "~/lib/prisma.server";

export const getLastProject = async () => {
  try {
    const allProjects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        suggestions: {
          include: { category: true, project: false },
          orderBy: { votes: "desc" },
        },
        suggestionCategories: true,
      },
    });

    const lastProject = allProjects[0];

    return { lastProject };
  } catch (error) {
    return { error: "There was an error getting the last project" };
  }
};
