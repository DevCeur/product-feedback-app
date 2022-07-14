import { redirect } from "@remix-run/node";

import type { User } from "@prisma/client";
import type { LoaderFunction } from "@remix-run/node";

import { ROUTE } from "./enum";

import { getCurrentUser, getCurrentUserId } from "~/services/user.server";

type CreateAuthLoaderOptions = {
  isPrivate: boolean;
  loader?: LoaderFunction;
};

export const createAuthLoader = ({
  isPrivate,
  loader,
}: CreateAuthLoaderOptions) => {
  try {
    const innerLoader: LoaderFunction = async (loaderOptions) => {
      const { request } = loaderOptions;

      let user: User | null = null;

      const userId = await getCurrentUserId(request);

      if (userId) {
        const { user: userFound } = await getCurrentUser(request);

        user = userFound;
      }

      const isAuthenticated = userId && user;

      if (isPrivate && !isAuthenticated) {
        return redirect("/");
      }

      if (!isPrivate && isAuthenticated) {
        return redirect(ROUTE.DASHBOARD);
      }

      if (loader) {
        return loader(loaderOptions);
      }

      return { auth: isAuthenticated };
    };

    return innerLoader;
  } catch (error) {
    throw new Error(`Error trying to get authenticated user ${error}`);
  }
};
