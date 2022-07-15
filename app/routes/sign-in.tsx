import type { LoaderFunction } from "@remix-run/node";

import { withAuth } from "~/utils/authPolicy.server";

import { SignInView } from "~/views/SignInView";

export const loader: LoaderFunction = ({ request }) => {
  return withAuth(request, { isPrivate: false });
};

const SignInRoute = () => {
  return <SignInView />;
};

export default SignInRoute;
