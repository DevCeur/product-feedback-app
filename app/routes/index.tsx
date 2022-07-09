import { redirect } from "@remix-run/node";

import type { LoaderFunction } from "@remix-run/node";

import { ROUTE } from "~/utils/enum";

export const loader: LoaderFunction = () => {
  return redirect(ROUTE.SUGGESTIONS);
};

const HomeRoute = () => {
  return <div>Product Feedback</div>;
};

export default HomeRoute;
