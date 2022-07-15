import bcrypt from "bcryptjs";

import type { ExtendedError } from "~/utils/types";

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

type CreateUserOptions = {
  data: {
    name: string;
    username: string;
    email: string;
    password: string;
  };
};

export const createUser = async ({ data }: CreateUserOptions) => {
  const { password } = data;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
        // in order to setup a random initial avatar we use https://avatars.dicebear.com/styles/bottts
        avatar: `https://avatars.dicebear.com/api/bottts/${data.username}.svg`,
      },
    });

    return { user, errors: null };
  } catch (e) {
    const error = e as ExtendedError;

    if (error.code === "P2002") {
      return {
        user: null,
        errors: {
          [error.meta
            .target[0]]: `This ${error.meta.target[0]} is already registered`,
        },
      };
    }

    return {
      user: null,
      errors: {
        server:
          "Server error, please contact product.feedback.app@support.com for more info.",
      },
    };
  }
};
