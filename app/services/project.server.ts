import { prisma } from "~/lib/prisma.server";

import { getCurrentUser } from "./user.server";

export const getAllUserProjects = async ({ userId }: { userId: string }) => {
  try {
    const projects = await prisma.project.findMany({
      where: { user: { id: userId } },
      orderBy: { createdAt: "desc" },
      include: {
        suggestions: {
          include: { category: true, project: false },
          orderBy: { votes: "desc" },
        },
        suggestionCategories: true,
      },
    });

    return { projects, errors: null };
  } catch (error) {
    return {
      projects: null,
      errors: { server: "There was an error getting the last project" },
    };
  }
};

export const getFeaturedProject = async ({ userId }: { userId: string }) => {
  try {
    const projects = await prisma.project.findMany({
      where: { user: { id: userId } },
      orderBy: { createdAt: "desc" },
      include: {
        suggestions: {
          include: { category: true, project: false },
          orderBy: { votes: "desc" },
        },
        suggestionCategories: true,
      },
    });

    let featuredProject = projects[0];

    // TO-DO | create logic to sort by suggestions count
    if (projects.length > 1) {
      console.log(projects.sort((project) => project.suggestions.length));
    }

    return { featuredProject, errors: null };
  } catch (e) {
    return {
      featuredProject: null,
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

type CreateSuggestionOptions = {
  userId: string;
  projectId: string;
  data: { title: string; category: string; description: string };
};

export const createSuggestion = async ({
  data,
  userId,
  projectId,
}: CreateSuggestionOptions) => {
  try {
    const suggestion = await prisma.suggestion.create({
      data: {
        title: data.title,
        description: data.description,
        user: { connect: { id: userId } },
        project: { connect: { id: projectId } },
        category: { connect: { id: data.category } },
        votes: 0,
      },
    });

    return { suggestion };
  } catch (error) {
    return {
      project: null,
      errors: { server: "There was an error creating this suggestion" },
    };
  }
};
