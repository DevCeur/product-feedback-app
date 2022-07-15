import { redirect } from "@remix-run/node";

import type { User } from "@prisma/client";

import { ROUTE } from "./enum";

import { getCurrentUser } from "~/services/user.server";

export type Policy<PolicyResult> = (
  request: Request,
  options: {
    isPrivate: boolean;
    callback?: (input: PolicyResult) => Promise<any>;
  }
) => Promise<any>;

export const withAuth: Policy<{ user: User | null }> = async (
  request,
  { isPrivate, callback }
) => {
  const { user } = await getCurrentUser(request);

  if (isPrivate && !user) {
    // TO-DO | Update to redirect to home when ready
    return redirect("/sign-in");
  }

  if (!isPrivate && user) {
    // TO-DO | update to redirect to dashboard
    return redirect(ROUTE.SUGGESTIONS);
  }

  if (callback) {
    return callback({ user });
  }

  return { user };
};
