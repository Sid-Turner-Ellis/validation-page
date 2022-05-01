import ls from "local-storage";
import uniqid from "uniqid";

export const getUserId = () => {
  const keyname = "slistUserId";
  const existingUserId = ls(keyname);

  if (existingUserId) {
    return existingUserId;
  }

  const timestamp = Date.now();
  const newUserId = uniqid(timestamp);
  ls(keyname, newUserId);
  return newUserId;
};

export const GA_EVENTS = {
  Cta1: () => ({
    category: "cta",
    action: "1",
  }),

  Cta2: (label) => ({
    category: "cta",
    action: "2",
    label,
  }),
};
