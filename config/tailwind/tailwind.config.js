module.exports = {
  content: ["./app/**/*.{ts,tsx,js,jsx}"],

  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
      },

      backgroundImage: {
        "project-gradient":
          "radial-gradient(circle, rgba(232,175,77,1) 0%, rgba(163,55,246,1) 75%, rgba(40,167,237,1) 100%)",
      },
      colors: {
        "bg-primary": "#F7F8FD",
        "bg-secondary": "#FFFFFF",
        "bg-overlay": "#F2F4FF",
        "bg-overlay-light": "#CFD7FF",
        "bg-overlay-dark": "#373F68",

        "fg-primary": "#3A4374",
        "fg-secondary": "#647196",
        "fg-overlay": "#FFFFFF",

        "brand-purple": "#AD1FEA",
        "brand-purple-light": "#C75AF6",

        "brand-orange": "#F49F85",

        "brand-red": "#D73737",
        "brand-red-light": "#E98888",

        "brand-blue-primary": "#4661E6",
        "brand-blue-primary-light": "#7C91F9",

        "brand-blue-secondary": "#62BCFA",

        "brand-gray-primary-light": "#656EA3",
      },
    },
  },
};
