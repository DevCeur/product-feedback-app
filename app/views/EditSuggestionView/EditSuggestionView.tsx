import { BiEdit } from "react-icons/bi";
import { Form, Link, useActionData } from "@remix-run/react";

import type { SuggestionExtended } from "~/utils/types";

import { SUGGESTION_STATUS } from "~/utils/enum";

import { Button } from "~/components/Button";
import { FormLayout } from "~/components/FormLayout";
import { TextInput } from "~/components/TextInput";
import { OptionsInput } from "~/components/OptionsInput";
import { TextareaInput } from "~/components/TextareaInput";
import { DeleteSuggestionModal } from "~/components/DeleteSuggestionModal";

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
          <DeleteSuggestionModal suggestion={suggestion} />

          <div className="flex space-x-4">
            <Link
              to={`/suggestion/${suggestion.id}`}
              className="py-3 px-6 text-white text-sm bg-fg-primary hover:bg-brand-gray-primary-light font-semibold transition-colors duration-200 rounded-xl"
            >
              Cancel
            </Link>

            <Button type="submit">Update Suggestion</Button>
          </div>
        </div>
      </Form>
    </FormLayout>
  );
};
