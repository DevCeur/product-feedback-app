import { prisma } from "~/lib/prisma.server";

import { getCurrentUser } from "./user.server";

export const getAllUserProjects = async ({ userId }: { userId: string }) => {
  try {
    const projects = await prisma.project.findMany({
      where: { user: { id: userId } },
      orderBy: { createdAt: "desc" },
    });

    return { projects, errors: null };
  } catch (error) {
    return {
      projects: null,
      errors: { server: "There was an error getting the last project" },
    };
  }
};

export const getProjectById = async ({ id }: { id: string }) => {
  try {
    const project = await prisma.project.findUnique({
      where: { id },
      include: {
        suggestions: {
          include: { category: true, project: false },
          orderBy: { votes: "desc" },
        },
        suggestionCategories: true,
      },
    });

    return { project, errors: null };
  } catch (error) {
    return {
      project: null,
      errors: { server: "There was an error getting the last project" },
    };
  }
};

type CreateProjectProps = {
  request: Request;
  data: { name: string; categories: { title: string }[] };
};

export const createProject = async ({ request, data }: CreateProjectProps) => {
  try {
    const { user } = await getCurrentUser(request);

    const project = await prisma.project.create({
      data: {
        name: data.name,
        user: { connect: { id: user?.id } },
        suggestionCategories: { createMany: { data: data.categories } },
      },
    });

    return { project, errors: null };
  } catch (error) {
    return {
      project: null,
      errors: { server: "There was an error creating project" },
    };
  }
};
