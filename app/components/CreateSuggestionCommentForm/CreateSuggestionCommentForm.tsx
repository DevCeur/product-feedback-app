import { useState } from "react";
import { useFetcher } from "@remix-run/react";

import type { ChangeEvent } from "react";
import type { User } from "@prisma/client";
import type { ExtendedSuggestion } from "~/utils/types";

import { Button } from "../Button";
import { TextareaInput } from "../TextareaInput";

const MAX_CHARACTERS = 250;

type CreateSuggestionCommentFormProps = {
  user: User;
  suggestion: ExtendedSuggestion;
};

export const CreateSuggestionCommentForm = ({
  user,
  suggestion,
}: CreateSuggestionCommentFormProps) => {
  const [message, setMessage] = useState("");
  const [characters, setCharacters] = useState(0);

  const { submit, data } = useFetcher();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    setCharacters(e.target.value.length);
  };

  const handleCreateComment = () => {
    if (user) {
      submit(
        { message, userId: user.id },
        {
          method: "post",
          action: `/suggestion/${suggestion.id}/comment/create`,
        }
      );
    }
  };

  return (
    <div className="py-6 px-8 bg-white rounded-xl">
      <h3 className="text-lg font-bold text-fg-primary">Add Comment</h3>
      <div>
        <TextareaInput
          label=""
          name="message"
          maxLength={MAX_CHARACTERS}
          value={message}
          onChange={handleChange}
          placeholder="type your comment here"
          error={data?.errors?.message}
        />

        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-fg-secondary">
            {MAX_CHARACTERS - characters} Characters left
          </span>

          <Button onClick={handleCreateComment}>Post Comment</Button>
        </div>
      </div>
    </div>
  );
};
