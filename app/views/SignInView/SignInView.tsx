import { Form, Link, useActionData } from "@remix-run/react";

import { ROUTE } from "~/utils/enum";

import { Button } from "~/components/Button";
import { FormCard } from "~/components/FormCard";
import { TextInput } from "~/components/TextInput";

export const SignInView = () => {
  const actionData = useActionData();

  return (
    <div className="w-full flex justify-center">
      <FormCard
        title="Welcome Back!"
        summary="Sign In to your account and manage all your projects feedback"
        variant="centered"
      >
        <Form method="post" className="w-full flex flex-col">
          <div className="mb-10 flex flex-col space-y-6">
            <TextInput
              label="Email or Username"
              name="emailUsername"
              error={actionData?.errors?.emailUsername}
            />

            <TextInput
              label="Password"
              type="password"
              name="password"
              placeholder="+6 characters"
              error={actionData?.errors?.password}
            />

            {actionData?.errors?.wrongCredentials && (
              <span className="text-xs text-red-500">
                {actionData.errors.wrongCredentials}
              </span>
            )}
          </div>

          <div className="flex flex-col items-center justify-center space-y-4">
            <Button colorScheme="blue">Sign In</Button>

            <Link to={ROUTE.SIGN_UP} className="text-sm text-fg-secondary">
              Don't have an account? Create One.
            </Link>
          </div>
        </Form>
      </FormCard>
    </div>
  );
};
