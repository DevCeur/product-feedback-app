export const ROUTE = {
  CREATE_PROJECT: "/create-project",
  DASHBOARD: "/dashboard",
  SUGGESTIONS: "/suggestions",
  ROADMAP: "/roadmap",
  PROFILE: "/profile",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
};

export const ERROR_MESSAGE = {
  REQUIRED_FIELD: "This field is required",
  REQUIRED_EMAIL: "An email is required",
  REQUIRED_PASSWORD: "A password is required",
  SHORT_PASSWORD: "Password should have at least +6 characters",
};

export const SUGGESTION_STATUS = {
  IDLE: "IDLE",
  PLANNED: "PLANNED",
  IN_PROGRESS: "IN_PROGRESS",
  LIVE: "LIVE",
};

export const EMAIL_REGEX =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
