import { Context, createContext } from "react";

export const MobileNavContext: Context<any> = createContext({
  currentPage: "home",
  setCurrentPage: (page: "groups" | "users" | "home") => {},
});
