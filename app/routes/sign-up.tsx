import { type LoaderFunction } from "@remix-run/node";

import { withAuth } from "~/utils/authPolicy.server";

import { SignUpView } from "~/views/SignUpView";

export const loader: LoaderFunction = ({ request }) => {
  return withAuth(request, { isPrivate: false });
};

const SignUpRoute = () => {
  return <SignUpView />;
};

export default SignUpRoute;
