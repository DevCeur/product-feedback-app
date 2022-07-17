import { Form, useNavigate } from "@remix-run/react";
import { Menu, MenuButton, MenuItem, MenuList } from "@reach/menu-button";

import type { User } from "@prisma/client";

import { ROUTE } from "~/utils/enum";

type ProfileMenuProps = {
  user: User;
};

export const ProfileMenu = ({ user }: ProfileMenuProps) => {
  const navigate = useNavigate();

  return (
    <Menu>
      {({ isExpanded }) => {
        return (
          <>
            <MenuButton
              className={`w-12 h-12 ${
                isExpanded ? "bg-bg-overlay" : "bg-transparent"
              } overflow-hidden rounded-full transition-colors duration-200`}
            >
              <img
                src={user.avatar}
                alt={`${user.username} avatar`}
                className="inline-block w-10"
              />
            </MenuButton>

            <MenuList className="menu-list-items-container profile-menu-items">
              <MenuItem onSelect={() => navigate(ROUTE.PROFILE)} className="">
                Go to Profile
              </MenuItem>

              <Form method="post" action="/sign-out">
                <button className="w-full py-3 px-6 text-left text-base !text-red-500 !font-medium hover:!text-red-500 hover:!bg-red-100 transition-colors duration-200">
                  Sign Out
                </button>
              </Form>
            </MenuList>
          </>
        );
      }}
    </Menu>
  );
};
