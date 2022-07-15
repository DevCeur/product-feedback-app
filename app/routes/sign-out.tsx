import { redirect } from "@remix-run/node";

import type { ActionFunction } from "@remix-run/node";

import { ROUTE } from "~/utils/enum";

import { destroySession, getUserSession } from "~/utils/authSession.server";

export const action: ActionFunction = async ({ request }) => {
  const userSession = await getUserSession(request);

  return redirect(ROUTE.SIGN_IN, {
    headers: { "Set-Cookie": await destroySession(userSession) },
  });
};
