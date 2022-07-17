import { BiPlusMedical } from "react-icons/bi";
import { Form, useActionData, useNavigate } from "@remix-run/react";

import type { ProjectExpanded } from "~/utils/types";

import { Button } from "~/components/Button";
import { TextInput } from "~/components/TextInput";
import { FormLayout } from "~/components/FormLayout";
import { OptionsInput } from "~/components/OptionsInput";
import { TextareaInput } from "~/components/TextareaInput";

type CreateSuggestionViewProps = {
  project: ProjectExpanded;
};

export const CreateSuggestionView = ({
  project,
}: CreateSuggestionViewProps) => {
  const navigate = useNavigate();
  const actionData = useActionData();

  return (
    <FormLayout title="Create New Suggestion" icon={BiPlusMedical}>
      <Form method="post">
        <div className="flex flex-col space-y-6 mb-8">
          <TextInput
            name="title"
            label="Suggestion Title"
            description="Add a short, descriptive headline"
            error={actionData?.errors.title}
          />

          <OptionsInput
            name="category"
            label="Category"
            description="Choose a category for your feedback"
            options={project.suggestionCategories.map((category) => ({
              value: category.id,
              label: category.title,
            }))}
          />

          <TextareaInput
            name="description"
            label="Suggestion Detail"
            description="Include any specific comments on what should be improved, added, etc."
            error={actionData?.errors.description}
          />
        </div>

        <div className="flex justify-end space-x-4">
          <Button colorScheme="gray" onClick={() => navigate(-1)}>
            Cancel
          </Button>

          <Button type="submit">Create Suggestion</Button>
        </div>
      </Form>
    </FormLayout>
  );
};
