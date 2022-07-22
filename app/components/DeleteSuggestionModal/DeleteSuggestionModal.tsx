import { useState } from "react";
import { Form } from "@remix-run/react";

import type { ExtendedSuggestion } from "~/utils/types";

import { Button } from "../Button";
import { BaseModal } from "../BaseModal";

type DeleteSuggestionModalProps = {
  suggestion: Partial<ExtendedSuggestion>;
};

export const DeleteSuggestionModal = ({
  suggestion,
}: DeleteSuggestionModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button colorScheme="red" type="button" onClick={() => setIsOpen(true)}>
        Delete
      </Button>

      <BaseModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="text-center flex flex-col items-center justify-center">
          <h3 className="text-2xl font-semibold text-fg-primary mb-2">
            Are you sure
            <br />
            you want to delete this suggestion?
          </h3>

          <p className="text-sm text-fg-secondary mb-6">
            This can't be undo and will be deleted forever.
          </p>

          <div className="flex justify-center items-center space-x-6">
            <Button onClick={() => setIsOpen(false)} colorScheme="gray">
              Cancel
            </Button>

            <Form method="post" action={`/suggestion/${suggestion.id}/delete`}>
              <Button
                colorScheme="red"
                type="submit"
                name="projectId"
                value={suggestion?.project?.id}
              >
                Delete Suggestion
              </Button>
            </Form>
          </div>
        </div>
      </BaseModal>
    </div>
  );
};
