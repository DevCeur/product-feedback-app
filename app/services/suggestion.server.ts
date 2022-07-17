import { prisma } from "~/lib/prisma.server";

export const getSuggestionById = async ({ id }: { id: string }) => {
  try {
    const suggestion = await prisma.suggestion.findUnique({
      where: { id },
      include: { project: true, user: true, category: true },
    });

    return { suggestion, errors: null };
  } catch (error) {
    return {
      suggestion: null,
      errors: { server: "There was an error retrieving this suggestion" },
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
