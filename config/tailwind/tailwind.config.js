module.exports = {
  content: ["./app/**/*.{ts,tsx,js,jsx}"],

  theme: {
    extend: {
      backgroundImage: {
        "project-gradient":
          "radial-gradient(circle, rgba(232,175,77,1) 0%, rgba(163,55,246,1) 75%, rgba(40,167,237,1) 100%)",
      },
      colors: {
        "bg-primary": "#F7F8FD",
        "bg-secondary": "#FFFFFF",
        "bg-overlay": "#F2F4FF",
        "bg-overlay-dark": "#373F68",

        "fg-primary": "#3A4374",
        "fg-secondary": "#647196",
        "fg-overlay": "#FFFFFF",

        "brand-purple": "#AD1FEA",

        "brand-orange": "#F49F85",

        "brand-blue-primary": "#4661E6",
        "brand-blue-secondary": "#62BCFA",
      },
    },
  },
};
