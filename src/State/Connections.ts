import type { ReactiveStates } from "@figliolia/react-galena";
import { connectMulti } from "@figliolia/react-galena";
import { Project } from "./Project";
import { Team } from "./Team";
import { User } from "./User";

export const teamProgressConnection = connectMulti(Team, Project);

export const personalProgressConnection = connectMulti(User, Team);

export type IPersonalProgress = ReactiveStates<
  typeof personalProgressConnection
>;
