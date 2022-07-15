import type { LoaderFunction } from "@remix-run/node";

import { withAuth } from "~/utils/authPolicy.server";

export const loader: LoaderFunction = ({ request }) => {
  return withAuth(request, { isPrivate: false });
};

const HomeRoute = () => {
  return <div>Product Feedback</div>;
};

export default HomeRoute;
