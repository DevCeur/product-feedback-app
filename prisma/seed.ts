import bcrypt from "bcryptjs";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getProject = () => {
  return {
    name: "Frontend Mentor Test",
    suggestionCategories: [
      { title: "UX" },
      { title: "UI" },
      { title: "Enhancement" },
      { title: "Bug" },
      { title: "Feature" },
    ],
  };
};

type SeedSuggestion = {
  title: string;
  description: string;
  votes: number;
  status: "IDLE" | "PLANNED" | "IN_PROGRESS" | "LIVE";
};

const getSuggestions = (): SeedSuggestion[] => {
  return [
    {
      title: "Add tags for solutions",
      description: "Easier to search for solutions based on a specific stack.",
      votes: 112,
      status: "IDLE",
    },
    {
      title: "Q&A within the challenges hubs",
      description: "Challenge-specific Q&A would make for easy reference.",
      votes: 65,
      status: "PLANNED",
    },
    {
      title: "Preview images not loading",
      description:
        "Challenge preview images are missing when you apply a filter.",
      votes: 3,
      status: "IN_PROGRESS",
    },
    {
      title: "Ability to follow others",
      description: "Stay updated on comments and solutions other people post.",
      votes: 42,
      status: "PLANNED",
    },
    {
      title: "Add a dark theme option",
      description:
        "It would help people with light sensitivities and who prefer dark mode.",
      votes: 99,
      status: "LIVE",
    },
  ];
};

export const getUser = async () => {
  const username = "JhonDoe";

  const password = await bcrypt.hash("abc123", 10);

  return {
    avatar: `https://avatars.dicebear.com/api/bottts/${username}.svg`,
    username,
    password,
    name: "Jhon Doe",
    email: "jhondoe@email.com",
  };
};

const seed = async () => {
  const baseProject = await prisma.project.create({
    data: {
      name: getProject().name,
      suggestionCategories: {
        createMany: { data: getProject().suggestionCategories },
      },
    },
    include: { suggestionCategories: true },
  });

  const user = await prisma.user.create({ data: await getUser() });

  await Promise.all(
    getSuggestions().map((suggestion) => {
      return prisma.suggestion.create({
        data: {
          title: suggestion.title,
          description: suggestion.description,
          project: { connect: { id: baseProject.id } },
          category: {
            connect: {
              id: baseProject.suggestionCategories[
                Math.floor(
                  Math.random() * baseProject.suggestionCategories.length
                )
              ].id,
            },
          },
          votes: suggestion.votes,
          status: suggestion.status,
          user: { connect: { id: user.id } },
        },
      });
    })
  );
};

seed();
