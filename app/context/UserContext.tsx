import { Context, createContext } from "react";

export const UserContext: Context<{
  creators: any;
  mods: any;
  members: any;
  setCreators: any;
  setMods: any;
  setMembers: any;
}> = createContext({
  creators: [],
  mods: [],
  members: [],
  setCreators: () => {},
  setMods: () => {},
  setMembers: () => {},
});
