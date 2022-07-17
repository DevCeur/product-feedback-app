import invariant from "tiny-invariant";

import { redirect } from "@remix-run/node";

import type { ActionFunction, LoaderFunction } from "@remix-run/node";

import { EMAIL_REGEX, ERROR_MESSAGE, ROUTE } from "~/utils/enum";

import { withAuth } from "~/utils/authPolicy.server";
import { commitSession, getUserSession } from "~/utils/authSession.server";

import { signInUser } from "~/services/user.server";

import { SignInView } from "~/views/SignInView";

export const loader: LoaderFunction = ({ request }) => {
  return withAuth(request, { isPrivate: false });
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const errors: { [x: string]: string } = {};

  const emailUsername = formData.get("emailUsername");
  const password = formData.get("password");

  invariant(typeof emailUsername === "string");
  invariant(typeof password === "string");

  const isEmail = emailUsername.match(EMAIL_REGEX);

  if (!emailUsername) {
    errors.emailUsername = ERROR_MESSAGE.REQUIRED_FIELD;
  }

  if (emailUsername && emailUsername.includes("@") && !isEmail) {
    errors.emailUsername = "This is not a valid email";
  }

  if (!password) {
    errors.password = ERROR_MESSAGE.REQUIRED_PASSWORD;
  }

  if (password.length && password.length < 6) {
    errors.password = ERROR_MESSAGE.SHORT_PASSWORD;
  }

  if (Object.keys(errors).length) {
    return { errors };
  }

  const { user, errors: userErrors } = await signInUser({
    byEmail: !!isEmail,
    data: { emailUsername, password },
  });

  if (userErrors) {
    return { errors: userErrors };
  }

  const userSession = await getUserSession(request);

  userSession.set("userId", user?.id);

  return redirect(ROUTE.DASHBOARD, {
    headers: { "Set-Cookie": await commitSession(userSession) },
  });
};

const SignInRoute = () => {
  return <SignInView />;
};

export default SignInRoute;
