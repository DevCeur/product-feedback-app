import { Form, Link } from "@remix-run/react";
import { Menu, Transition } from "@headlessui/react";

import type { User } from "@prisma/client";

type ProfileMenuProps = {
  user: User;
};

export const ProfileMenu = ({ user }: ProfileMenuProps) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className={`w-12 h-12 ${
            true ? "bg-bg-overlay" : "bg-transparent"
          } overflow-hidden rounded-full transition-colors duration-200`}
        >
          <img
            src={user.avatar}
            alt={`${user.username} avatar`}
            className="inline-block w-10"
          />
        </Menu.Button>
      </div>

      <Transition
        enter="transition duration-200 ease-out"
        enterFrom="transform -translate-y-1 opacity-0"
        enterTo="transform translate-y-0 opacity-100"
        leave="transition duration-200 -translate-y-1 ease-out"
        leaveFrom="transform translate-y-0 opacity-100"
        leaveTo="transform -translate-y-1 opacity-0"
      >
        <Menu.Items className="w-[200px] mt-6 bg-white absolute flex flex-col right-0 origin-top-right rounded-xl overflow-hidden shadow-xl">
          <Menu.Item>
            <Link
              to="/profile"
              className="w-full py-3 px-6 text-fg-primary hover:bg-bg-overlay text-left text-base !font-medium transition-colors duration-200"
            >
              Go to Profile
            </Link>
          </Menu.Item>

          <Menu.Item>
            <Form method="post" action="/sign-out">
              <button className="w-full py-3 px-6 text-left text-base !text-red-500 !font-medium hover:!text-red-500 hover:!bg-red-100 transition-colors duration-200">
                Sign Out
              </button>
            </Form>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
