import { prisma } from "~/lib/prisma.server";

import { getUserSession } from "~/utils/authSession.server";

export const getCurrentUserId = async (request: Request) => {
  const userSession = await getUserSession(request);

  const userId = userSession.get("userId");

  try {
    return userId;
  } catch (error) {
    throw new Error("Something failed getting user id");
  }
};

export const getCurrentUser = async (request: Request) => {
  const userId = await getCurrentUserId(request);

  try {
    if (!userId) {
      return { user: null, errors: null };
    }

    const user = await prisma.user.findUnique({ where: { id: userId } });

    return { user, errors: null };
  } catch (error) {
    throw new Error("Something failed getting user by id");
  }
};
