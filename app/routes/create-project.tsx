import invariant from "tiny-invariant";

import { redirect } from "@remix-run/node";

import type { ActionFunction, LoaderFunction } from "@remix-run/node";

import { ERROR_MESSAGE } from "~/utils/enum";

import { withAuth } from "~/utils/authPolicy.server";

import { CreateProjectView } from "~/views/CreateProjectView";
import { createProject } from "~/services/project.server";

export const loader: LoaderFunction = ({ request }) => {
  return withAuth(request, { isPrivate: true });
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const errors: { [x: string]: string } = {};

  const name = formData.get("name");
  const categories = formData.get("categories");

  invariant(typeof name === "string");
  invariant(typeof categories === "string");

  const arrCategories = categories.split(",").map((cat) => ({ title: cat }));

  if (!name) {
    errors.name = ERROR_MESSAGE.REQUIRED_FIELD;
  }

  if (arrCategories.length < 3) {
    errors.categories = "You should add at least 3 categories";
  }

  if (Object.keys(errors).length) {
    return { errors };
  }

  const { project, errors: projectErrors } = await createProject({
    request,
    data: { name, categories: arrCategories },
  });

  if (projectErrors) {
    return { errors: projectErrors };
  }

  return redirect(`/project/${project.id}`);
};

const CreateProjectRoute = () => {
  return <CreateProjectView />;
};

export default CreateProjectRoute;
