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
    avatar:
      "data:image/svg+xml;utf8,%3Csvg%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%20xmlns%3Asvg%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20180%20180%22%20width%3D%2260%22%20height%3D%2260%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%3EBottts%3C%2Fdc%3Atitle%3E%3Cdc%3Acreator%3E%3Ccc%3AAgent%3E%3Cdc%3Atitle%3EPablo%20Stanley%3C%2Fdc%3Atitle%3E%3C%2Fcc%3AAgent%3E%3C%2Fdc%3Acreator%3E%3Cdc%3Asource%3Ehttps%3A%2F%2Fbottts.com%2F%3C%2Fdc%3Asource%3E%3Ccc%3Alicense%20rdf%3Aresource%3D%22https%3A%2F%2Fbottts.com%2F%22%2F%3E%3Cdc%3Acontributor%3E%3Ccc%3AAgent%3E%3Cdc%3Atitle%3EFlorian%20K%C3%B6rner%3C%2Fdc%3Atitle%3E%3C%2Fcc%3AAgent%3E%3C%2Fdc%3Acontributor%3E%3C%2Fcc%3AWork%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cmask%20id%3D%22avatarsRadiusMask%22%3E%3Crect%20width%3D%22180%22%20height%3D%22180%22%20rx%3D%220%22%20ry%3D%220%22%20x%3D%220%22%20y%3D%220%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fmask%3E%3Cg%20mask%3D%22url(%23avatarsRadiusMask)%22%3E%3Cg%20transform%3D%22translate(0%2C%2066)%22%3E%3Cg%20opacity%3D%220.9%22%3E%3Cpath%20id%3D%22Cable%22%20d%3D%22M38%2012C35.046%2023.6966%2018.0959%2018.6663%2014.6313%2030.009C11.1668%2041.3518%2022.6565%2050%2032.1552%2050%22%20stroke%3D%22%232A3544%22%20stroke-width%3D%226%22%2F%3E%3Cpath%20id%3D%22Cable_2%22%20d%3D%22M150%2055C158.394%2058.4864%20170.102%2047.4063%20166%2038.5C161.898%2029.5936%20150%2031.8056%20150%2019.195%22%20stroke%3D%22%232A3544%22%20stroke-width%3D%224%22%2F%3E%3C%2Fg%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M138%206C136.895%206%20136%206.89543%20136%208V22C136%2023.1046%20136.895%2024%20138%2024H157C158.105%2024%20159%2023.1046%20159%2022V8C159%206.89543%20158.105%206%20157%206H138ZM21%2037C21%2035.8954%2021.8954%2035%2023%2035H35C36.1046%2035%2037%2035.8954%2037%2037V55C37%2056.1046%2036.1046%2057%2035%2057H23C21.8954%2057%2021%2056.1046%2021%2055V37ZM136%2044C136%2042.8954%20136.895%2042%20138%2042H157C158.105%2042%20159%2042.8954%20159%2044V62C159%2063.1046%20158.105%2064%20157%2064H138C136.895%2064%20136%2063.1046%20136%2062V44Z%22%20fill%3D%22%23273951%22%2F%3E%3Cmask%20id%3D%22sidesCables01Mask0%22%20mask-type%3D%22alpha%22%20maskUnits%3D%22userSpaceOnUse%22%20x%3D%2221%22%20y%3D%226%22%20width%3D%22138%22%20height%3D%2258%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M138%206C136.895%206%20136%206.89543%20136%208V22C136%2023.1046%20136.895%2024%20138%2024H157C158.105%2024%20159%2023.1046%20159%2022V8C159%206.89543%20158.105%206%20157%206H138ZM21%2037C21%2035.8954%2021.8954%2035%2023%2035H35C36.1046%2035%2037%2035.8954%2037%2037V55C37%2056.1046%2036.1046%2057%2035%2057H23C21.8954%2057%2021%2056.1046%2021%2055V37ZM136%2044C136%2042.8954%20136.895%2042%20138%2042H157C158.105%2042%20159%2042.8954%20159%2044V62C159%2063.1046%20158.105%2064%20157%2064H138C136.895%2064%20136%2063.1046%20136%2062V44Z%22%20fill%3D%22white%22%2F%3E%3C%2Fmask%3E%3Cg%20mask%3D%22url(%23sidesCables01Mask0)%22%3E%3Crect%20width%3D%22180%22%20height%3D%2276%22%20fill%3D%22%23EF5350%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(41%2C%200)%22%3E%3Cg%20filter%3D%22url(%23topGlowingBulb01Filter0)%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M32%2024C32%2015.1634%2039.1634%208%2048%208H52C60.8366%208%2068%2015.1634%2068%2024V32C68%2036.4183%2064.4183%2040%2060%2040H40C35.5817%2040%2032%2036.4183%2032%2032V24Z%22%20fill%3D%22white%22%20fill-opacity%3D%220.3%22%2F%3E%3C%2Fg%3E%3Cpath%20d%3D%22M49%2011.5C53.9315%2011.5%2058.366%2013.6281%2061.4352%2017.0162%22%20stroke%3D%22white%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M49.8284%2029L40.8284%2020L38%2022.8284L48%2032.8284V40H52V32.9706L62.1421%2022.8284L59.3137%2020L50.3137%2029H49.8284Z%22%20fill%3D%22white%22%20fill-opacity%3D%220.8%22%2F%3E%3Crect%20x%3D%2222%22%20y%3D%2240%22%20width%3D%2256%22%20height%3D%2212%22%20rx%3D%221%22%20fill%3D%22%23EF5350%22%2F%3E%3Cdefs%3E%3Cfilter%20id%3D%22topGlowingBulb01Filter0%22%20x%3D%2224%22%20y%3D%220%22%20width%3D%2252%22%20height%3D%2248%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%2F%3E%3CfeOffset%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%224%22%2F%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.5%200%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow%22%20result%3D%22shape%22%2F%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%3CfeOffset%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%222%22%2F%3E%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22arithmetic%22%20k2%3D%22-1%22%20k3%3D%221%22%2F%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200%200%200%200.5%200%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22shape%22%20result%3D%22effect2_innerShadow%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(25%2C%2044)%22%3E%3Crect%20width%3D%22130%22%20height%3D%22120%22%20rx%3D%2218%22%20fill%3D%22%230076DE%22%2F%3E%3Cmask%20id%3D%22faceSquare01Mask0%22%20mask-type%3D%22alpha%22%20maskUnits%3D%22userSpaceOnUse%22%20x%3D%220%22%20y%3D%220%22%20width%3D%22130%22%20height%3D%22120%22%3E%3Crect%20width%3D%22130%22%20height%3D%22120%22%20rx%3D%2218%22%20fill%3D%22white%22%2F%3E%3C%2Fmask%3E%3Cg%20mask%3D%22url(%23faceSquare01Mask0)%22%3E%3Crect%20x%3D%22-2%22%20y%3D%22-2%22%20width%3D%22134%22%20height%3D%22124%22%20fill%3D%22%23E53935%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M15%200H11V18H15V0ZM23%200H19V30V34H23H72.416C73.1876%2035.7659%2074.9497%2037%2077%2037C79.7614%2037%2082%2034.7614%2082%2032C82%2029.2386%2079.7614%2027%2077%2027C74.9497%2027%2073.1876%2028.2341%2072.416%2030H23V0Z%22%20fill%3D%22black%22%20fill-opacity%3D%220.1%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M122%2034.584C123.766%2033.8124%20125%2032.0503%20125%2030C125%2027.2386%20122.761%2025%20120%2025C117.239%2025%20115%2027.2386%20115%2030C115%2032.0503%20116.234%2033.8124%20118%2034.584V60V64H122H141V60H122V34.584Z%22%20fill%3D%22white%22%20fill-opacity%3D%220.2%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M114%2046H110V68V72H114H141V68H114V46Z%22%20fill%3D%22black%22%20fill-opacity%3D%220.2%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M27%20103.584C25.2341%20102.812%2024%20101.05%2024%2099C24%2096.2386%2026.2386%2094%2029%2094C31.7614%2094%2034%2096.2386%2034%2099C34%20101.05%2032.7659%20102.812%2031%20103.584V129V133H27H8V129H27V103.584Z%22%20fill%3D%22black%22%20fill-opacity%3D%220.2%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(52%2C%20124)%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M18%2010.2222C18%2021.7845%2024.4741%2028%2038%2028C51.5182%2028%2058%2021.6615%2058%2010.2222C58%209.49622%2057.1739%208%2055%208C39.2707%208%2029.1917%208%2021%208C18.949%208%2018%209.38479%2018%2010.2222Z%22%20fill%3D%22black%22%20fill-opacity%3D%220.8%22%2F%3E%3Cmask%20id%3D%22mouthSmilie02Mask0%22%20mask-type%3D%22alpha%22%20maskUnits%3D%22userSpaceOnUse%22%20x%3D%2218%22%20y%3D%228%22%20width%3D%2240%22%20height%3D%2220%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M18%2010.2222C18%2021.7845%2024.4741%2028%2038%2028C51.5182%2028%2058%2021.6615%2058%2010.2222C58%209.49622%2057.1739%208%2055%208C39.2707%208%2029.1917%208%2021%208C18.949%208%2018%209.38479%2018%2010.2222Z%22%20fill%3D%22white%22%2F%3E%3C%2Fmask%3E%3Cg%20mask%3D%22url(%23mouthSmilie02Mask0)%22%3E%3Crect%20x%3D%2230%22%20y%3D%222%22%20width%3D%2216%22%20height%3D%2214%22%20rx%3D%222%22%20fill%3D%22white%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(38%2C%2076)%22%3E%3Crect%20y%3D%2212%22%20width%3D%22104%22%20height%3D%2232%22%20rx%3D%2216%22%20fill%3D%22black%22%20fill-opacity%3D%220.8%22%2F%3E%3Crect%20x%3D%2224%22%20y%3D%2222%22%20width%3D%2210%22%20height%3D%2212%22%20rx%3D%222%22%20fill%3D%22%23F4F4F4%22%2F%3E%3Crect%20x%3D%2270%22%20y%3D%2222%22%20width%3D%2210%22%20height%3D%2212%22%20rx%3D%222%22%20fill%3D%22%23F4F4F4%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    username,
    password,
    firstName: "Jhon",
    lastName: "Doe",
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
