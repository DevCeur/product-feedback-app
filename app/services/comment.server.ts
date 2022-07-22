import { prisma } from "~/lib/prisma.server";

export const getSuggestionComments = ({
  suggestionId,
}: {
  suggestionId: string;
}) => {
  try {
    const comments = prisma.comment.findMany({
      where: { suggestionId },
      include: { user: true },
    });

    return { comments, errors: null };
  } catch (error) {
    return {
      comments: null,
      errors: {
        server: "There was an error getting comments for this suggestion",
      },
    };
  }
};

type CreateCommentOptions = {
  userId: string;
  message: string;
  suggestionId: string;
};

export const createComment = async ({
  userId,
  message,
  suggestionId,
}: CreateCommentOptions) => {
  try {
    const comment = await prisma.comment.create({
      data: {
        message,
        user: { connect: { id: userId } },
        suggestion: { connect: { id: suggestionId } },
      },
    });

    return { comment, errors: null };
  } catch (error) {
    return {
      comment: null,
      errors: { server: "There was an error creating this comment" },
    };
  }
};
