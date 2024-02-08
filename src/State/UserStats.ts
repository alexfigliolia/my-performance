import { connect } from "@figliolia/react-galena";
import { UserStatsModel } from "Models/UserStatsModel";

export const UserStats = new UserStatsModel();

export const connectUserStats = connect(UserStats);
