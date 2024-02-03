import type { ReactiveStates } from "@figliolia/react-galena";
import { connectMulti } from "@figliolia/react-galena";
import { EditUser } from "./EditUser";
import { Modals } from "./Modals";
import { Project } from "./Project";
import { Team } from "./Team";
import { User } from "./User";

export const teamProgressConnection = connectMulti(Team, Project);

export const personalProgressConnection = connectMulti(User, Team);

export const editUserConnection = connectMulti(Modals, EditUser);

export type IPersonalProgress = ReactiveStates<
  typeof personalProgressConnection
>;

export type IEditUserConnection = ReactiveStates<typeof editUserConnection>;
