import { Form, Link, useActionData } from "@remix-run/react";

import { ROUTE } from "~/utils/enum";

import { Button } from "~/components/Button";
import { FormCard } from "~/components/FormCard";
import { TextInput } from "~/components/TextInput";

export const SignUpView = () => {
  const actionData = useActionData();

  return (
    <div className="w-full flex justify-center pb-10">
      <FormCard
        title="Create your Account"
        summary="Let's create an account and start sharing your projects!"
        variant="centered"
      >
        <Form method="post" className="w-full flex flex-col">
          <div className="mb-10 flex flex-col space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <TextInput
                label="Name"
                type="text"
                name="name"
                error={actionData?.errors?.name}
              />

              <TextInput
                label="Username"
                type="text"
                name="username"
                autoComplete="off"
                error={actionData?.errors?.username}
              />
            </div>

            <TextInput
              label="Email"
              type="email"
              name="email"
              autoComplete="off"
              error={actionData?.errors?.email}
            />

            <TextInput
              label="Password"
              type="password"
              name="password"
              placeholder="+6 characters"
              error={actionData?.errors?.password}
            />
          </div>

          <div className="flex flex-col items-center justify-center space-y-4">
            <Button colorScheme="blue">Create Account</Button>

            <Link to={ROUTE.SIGN_IN} className="text-sm text-fg-secondary">
              Already have an account? Sign In.
            </Link>
          </div>
        </Form>
      </FormCard>
    </div>
  );
};
