import { connect } from "@figliolia/react-galena";
import { UserStatsModel } from "Models/UserStats";

export const UserStats = new UserStatsModel();

export const connectUserStats = connect(UserStats);
