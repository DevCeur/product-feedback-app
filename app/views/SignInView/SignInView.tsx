import { Button } from "~/components/Button";
import { FormCard } from "~/components/FormCard";
import { TextInput } from "~/components/TextInput";

export const SignInView = () => {
  return (
    <div className="w-full flex justify-center">
      <FormCard
        title="Welcome Back!"
        summary="Sign In to your account and manage all your projects feedback"
        variant="centered"
      >
        <form className="w-full flex flex-col">
          <div className="mb-10 flex flex-col space-y-6">
            <TextInput label="Email or Username" name="emailUsername" />

            <TextInput
              label="Password"
              type="password"
              name="password"
              placeholder="+6 characters"
            />
          </div>

          <div className="flex justify-end">
            <Button colorScheme="blue">Sign In</Button>
          </div>
        </form>
      </FormCard>
    </div>
  );
};
