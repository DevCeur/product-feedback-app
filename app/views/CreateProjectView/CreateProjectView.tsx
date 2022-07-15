import { useState } from "react";
import { BiPlusMedical, BiX } from "react-icons/bi";
import { useSubmit, useNavigate, useActionData } from "@remix-run/react";

import { ERROR_MESSAGE } from "~/utils/enum";

import { Button } from "~/components/Button";
import { TextInput } from "~/components/TextInput";
import { FormLayout } from "~/components/FormLayout";

export const CreateProjectView = () => {
  const submit = useSubmit();
  const navigate = useNavigate();
  const actionData = useActionData();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [categoryError, setCategoryError] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);

  const handleCreateProject = () => {
    submit({ name, categories: categories.join(",") }, { method: "post" });
  };

  return (
    <FormLayout title="Create New Project" icon={BiPlusMedical}>
      <div>
        <div className="flex flex-col space-y-6 mb-8">
          <TextInput
            name="name"
            label="Project Name"
            description="Add your project's name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={actionData?.errors?.name}
          />

          <div className="w-full flex flex-col items-end justify-between">
            <div className="w-full">
              <TextInput
                name="categories"
                label="Suggestion Categories"
                description="Add some suggestion categories, to categorize your suggestions"
                action="Add"
                value={category}
                error={categoryError || actionData?.errors?.categories}
                onChange={(e) => setCategory(e.target.value)}
                onClickAction={() => {
                  setCategoryError("");

                  if (!category) {
                    setCategoryError(ERROR_MESSAGE.REQUIRED_FIELD);
                    return;
                  }

                  if (categories.includes(category)) {
                    setCategoryError("This category was alredy added");
                  } else {
                    setCategories([...categories, category]);
                    setCategory("");
                  }
                }}
              />
            </div>

            <div className="w-full mt-4 flex flex-wrap gap-4">
              {categories.map((intCat, index) => (
                <div
                  key={intCat}
                  className="text-sm font-medium flex items-center space-x-1 text-brand-blue-primary bg-bg-overlay py-1 px-3 rounded-lg relative"
                >
                  <span className="">{intCat}</span>

                  <button
                    onClick={() => {
                      setCategories([
                        ...categories.slice(0, index),
                        ...categories.slice(index + 1),
                      ]);
                    }}
                    className="w-4 h-4 bg-bg-overlay-light flex items-center justify-center rounded-full absolute -right-[6px] -top-[6px]"
                  >
                    <BiX className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <Button colorScheme="gray" onClick={() => navigate(-1)}>
            Cancel
          </Button>

          <Button onClick={handleCreateProject}>Create Project</Button>
        </div>
      </div>
    </FormLayout>
  );
};
