import { ACCESS, TEAMS } from "./const";

export type UserData = {
  id: string;
  name: string;
  avatar: string;
  email: string;
  groups: Team[];
  access: Access[];
  createdAt: Date | string;
  last_login: EpochTimeStamp;
};

type Team = (typeof TEAMS)[number];
type Access = (typeof ACCESS)[number];
