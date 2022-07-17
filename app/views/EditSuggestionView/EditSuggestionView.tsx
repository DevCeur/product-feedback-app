import { BiEdit } from "react-icons/bi";
import { Form, useActionData, useNavigate } from "@remix-run/react";

import type { SuggestionExtended } from "~/utils/types";

import { SUGGESTION_STATUS } from "~/utils/enum";

import { Button } from "~/components/Button";
import { FormLayout } from "~/components/FormLayout";
import { TextInput } from "~/components/TextInput";
import { OptionsInput } from "~/components/OptionsInput";
import { TextareaInput } from "~/components/TextareaInput";

type EditSuggestionViewProps = {
  suggestion: SuggestionExtended;
};

const SUGGESTION_STATUS_OPTIONS = [
  { value: SUGGESTION_STATUS.IDLE, label: "No Status" },
  { value: SUGGESTION_STATUS.PLANNED, label: "Planned" },
  { value: SUGGESTION_STATUS.IN_PROGRESS, label: "In Progress" },
  { value: SUGGESTION_STATUS.LIVE, label: "Live" },
];

export const EditSuggestionView = ({ suggestion }: EditSuggestionViewProps) => {
  const navigate = useNavigate();
  const actionData = useActionData();

  return (
    <FormLayout title={`Edit '${suggestion.title}'`} icon={BiEdit}>
      <Form method="post">
        <div className="flex flex-col space-y-6 mb-8">
          <TextInput
            name="title"
            label="Suggestion Title"
            defaultValue={suggestion.title}
            description="Add a short, descriptive headline"
            error={actionData?.errors.title}
          />

          <OptionsInput
            name="category"
            label="Category"
            description="Choose a category for your feedback"
            defaultValue={suggestion.category.id}
            options={suggestion.project.suggestionCategories.map(
              (category) => ({
                value: category.id,
                label: category.title,
              })
            )}
          />

          <OptionsInput
            name="status"
            label="Update Status"
            description="Update suggestion status"
            defaultValue={suggestion.status}
            options={SUGGESTION_STATUS_OPTIONS}
          />

          <TextareaInput
            name="description"
            label="Suggestion Detail"
            defaultValue={suggestion.description}
            description="Include any specific comments on what should be improved, added, etc."
            error={actionData?.errors.description}
          />
        </div>

        <div className="flex items-center justify-between">
          <Form method="post" action={`/suggestion/${suggestion.id}/delete`}>
            <Button
              type="submit"
              name="projectId"
              value={suggestion.project.id}
              colorScheme="red"
            >
              Delete
            </Button>
          </Form>

          <div className="flex space-x-4">
            <Button colorScheme="gray" onClick={() => navigate(-1)}>
              Cancel
            </Button>

            <Button type="submit">Update Suggestion</Button>
          </div>
        </div>
      </Form>
    </FormLayout>
  );
};
