import create from "zustand";

import type { User } from "@prisma/client";

type UserState = {
  user: null | User;

  setUser: (user: User | null) => void;
};

export const useUser = create<UserState>((set) => ({
  user: null,

  setUser: (user) => set({ user }),
}));
