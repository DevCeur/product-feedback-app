import invariant from "tiny-invariant";

import { redirect } from "@remix-run/node";

import type { ActionFunction, LoaderFunction } from "@remix-run/node";

import { EMAIL_REGEX, ERROR_MESSAGE, ROUTE } from "~/utils/enum";

import { withAuth } from "~/utils/authPolicy.server";
import { commitSession, getUserSession } from "~/utils/authSession.server";

import { createUser } from "~/services/user.server";

import { SignUpView } from "~/views/SignUpView";

export const loader: LoaderFunction = ({ request }) => {
  return withAuth(request, { isPrivate: false });
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const errors: { [x: string]: string } = {};

  const name = formData.get("name");
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  invariant(typeof name === "string");
  invariant(typeof username === "string");
  invariant(typeof email === "string");
  invariant(typeof password === "string");

  if (!name) {
    errors.name = ERROR_MESSAGE.REQUIRED_FIELD;
  }

  if (!username) {
    errors.username = ERROR_MESSAGE.REQUIRED_FIELD;
  }

  if (!email) {
    errors.email = ERROR_MESSAGE.REQUIRED_EMAIL;
  }

  if (email && !email.match(EMAIL_REGEX)) {
    errors.email = "This is not a valid email";
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

  const { user, errors: userErrors } = await createUser({
    data: { name, username, email, password },
  });

  if (userErrors) {
    return { errors: userErrors };
  }

  const userSession = await getUserSession(request);

  userSession.set("userId", user?.id);

  return redirect(ROUTE.SUGGESTIONS, {
    headers: { "Set-Cookie": await commitSession(userSession) },
  });
};

const SignUpRoute = () => {
  return <SignUpView />;
};

export default SignUpRoute;
