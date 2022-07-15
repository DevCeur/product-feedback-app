import type { LoaderFunction } from "@remix-run/node";

import { withAuth } from "~/utils/authPolicy.server";

import { CreateProjectView } from "~/views/CreateProjectView";

export const loader: LoaderFunction = ({ request }) => {
  return withAuth(request, { isPrivate: true });
};

const CreateProjectRoute = () => {
  return <CreateProjectView />;
};

export default CreateProjectRoute;
