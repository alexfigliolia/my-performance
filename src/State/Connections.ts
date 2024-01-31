import { connectMulti } from "@figliolia/react-galena";
import { Team } from "./Team";
import { Project } from "./Project";
import { Authentication } from "./Authentication";

export const teamProgressConnection = connectMulti(Team, Project);

export const personalProgressConnection = connectMulti(Authentication, Team);
