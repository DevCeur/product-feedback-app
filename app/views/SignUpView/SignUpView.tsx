import { Button } from "~/components/Button";
import { FormCard } from "~/components/FormCard";
import { TextInput } from "~/components/TextInput";

export const SignUpView = () => {
  return (
    <div className="w-full flex justify-center">
      <FormCard
        title="Create your Account"
        summary="Let's create an account and start sharing your projects!"
        variant="centered"
      >
        <form className="w-full flex flex-col">
          <div className="mb-10 flex flex-col space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <TextInput label="Name" type="text" name="name" />

              <TextInput
                label="Username"
                type="text"
                name="username"
                autoComplete="off"
              />
            </div>

            <TextInput
              label="Email"
              type="email"
              name="email"
              autoComplete="off"
            />

            <TextInput
              label="Password"
              type="password"
              name="password"
              placeholder="+6 characters"
            />
          </div>

          <div className="flex justify-end">
            <Button colorScheme="blue">Create Account</Button>
          </div>
        </form>
      </FormCard>
    </div>
  );
};
