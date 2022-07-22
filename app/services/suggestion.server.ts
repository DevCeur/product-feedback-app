import { prisma } from "~/lib/prisma.server";

import type { SuggestionStatus } from "@prisma/client";

export const getSuggestionById = async ({ id }: { id: string }) => {
  try {
    const suggestion = await prisma.suggestion.findUnique({
      where: { id },
      include: {
        user: true,
        category: true,
        project: { include: { suggestionCategories: true } },
        votedBy: { include: { suggestion: true, user: true } },
        comments: { include: { user: true } },
      },
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

type UpdateSuggestionOptions = {
  suggestionId: string;
  data: {
    title: string;
    category: string;
    description: string;
    status: SuggestionStatus;
  };
};

export const updateSuggestion = async ({
  suggestionId,
  data,
}: UpdateSuggestionOptions) => {
  try {
    const suggestion = await prisma.suggestion.update({
      where: { id: suggestionId },
      data: {
        title: data.title,
        description: data.description,
        category: { connect: { id: data.category } },
        status: { set: data.status },
      },
    });

    return { suggestion, errors: null };
  } catch (error) {
    return {
      suggestion: null,
      errors: { server: "There was an error updating this suggestion" },
    };
  }
};

export const deleteSuggestion = async ({ id }: { id: string }) => {
  try {
    await prisma.suggestionVote.deleteMany({ where: { suggestionId: id } });

    const suggestion = await prisma.suggestion.delete({
      where: { id },
    });

    return { suggestion, errors: null };
  } catch (error) {
    console.error(error);

    return {
      suggestion: null,
      errors: { server: "There was an error updating this suggestion" },
    };
  }
};

type ToggleVoteOptions = {
  userId: string;
  subaction: string;
  votedById: string;
  suggestionId: string;
};

export const toggleVote = async ({
  userId,
  subaction,
  votedById,
  suggestionId,
}: ToggleVoteOptions) => {
  try {
    const suggestion = await prisma.suggestion.update({
      where: { id: suggestionId },
      data:
        subaction === "vote"
          ? {
              votes: { increment: 1 },
              votedBy: { create: { user: { connect: { id: userId } } } },
            }
          : {
              votes: { decrement: 1 },
              votedBy: { delete: { id: votedById } },
            },
    });

    return { suggestion, errors: null };
  } catch (error) {
    return {
      suggestion: null,
      errors: { server: "There was an error toggling this vote" },
    };
  }
};
