import { createUseState } from "@figliolia/react-galena";
import { TeamsModel } from "Models/Teams";

export const Teams = new TeamsModel();

export const useTeams = createUseState(Teams);
