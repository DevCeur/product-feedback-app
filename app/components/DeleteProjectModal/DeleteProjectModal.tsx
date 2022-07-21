import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { Form } from "@remix-run/react";

import type { Project } from "@prisma/client";

import { Button } from "../Button";
import { BaseModal } from "../BaseModal";

type DeleteProjectModalProps = {
  project: Project;
  bigButton?: boolean;
};

export const DeleteProjectModal = ({
  project,
  bigButton,
}: DeleteProjectModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {bigButton ? (
        <Button type="button" colorScheme="red" onClick={() => setIsOpen(true)}>
          Delete
        </Button>
      ) : (
        <button className="icon-button" onClick={() => setIsOpen(true)}>
          <BiTrash />
        </button>
      )}

      <BaseModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="text-center flex flex-col items-center justify-center">
          <h3 className="text-2xl font-semibold text-fg-primary mb-2">
            Are you sure you want to delete
            <br /> "{project.name}" project?
          </h3>

          <p className="text-sm text-fg-secondary mb-6">
            This can't be undo and will be deleted forever.
          </p>

          <div className="flex justify-center items-center space-x-6">
            <Button onClick={() => setIsOpen(false)} colorScheme="gray">
              Cancel
            </Button>

            <Form method="post" action={`/project/${project.id}/delete`}>
              <Button colorScheme="red">Delete Project</Button>
            </Form>
          </div>
        </div>
      </BaseModal>
    </div>
  );
};
