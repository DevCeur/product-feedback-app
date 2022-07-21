import { BiEdit } from "react-icons/bi";
import { Form, Link, useActionData } from "@remix-run/react";

import type { ProjectExpanded } from "~/utils/types";

import { Button } from "~/components/Button";
import { TextInput } from "~/components/TextInput";
import { FormLayout } from "~/components/FormLayout";
import { DeleteProjectModal } from "~/components/DeleteProjectModal";

type EditProjectViewProps = {
  project: ProjectExpanded;
};

export const EditProjectView = ({ project }: EditProjectViewProps) => {
  const actionData = useActionData();

  return (
    <FormLayout title={`Edit '${project.name}'`} icon={BiEdit}>
      <Form method="post">
        <div className="flex flex-col space-y-6 mb-12">
          <TextInput
            name="name"
            label="Project Name"
            defaultValue={project.name}
            error={actionData?.errors.title}
          />
        </div>

        <div className="flex items-center justify-between">
          <DeleteProjectModal project={project} bigButton />

          <div className="flex space-x-4">
            <Link
              to={`/project/${project.id}`}
              className="py-3 px-6 text-white text-sm bg-fg-primary hover:bg-brand-gray-primary-light font-semibold transition-colors duration-200 rounded-xl"
            >
              Cancel
            </Link>

            <Button type="submit">Update Project</Button>
          </div>
        </div>
      </Form>
    </FormLayout>
  );
};
