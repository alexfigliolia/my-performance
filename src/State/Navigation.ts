import { connect } from "@figliolia/react-galena";
import { NavigationModel } from "Models/NavigationModel";

export const Navigation = new NavigationModel();

export const connectNavigation = connect(Navigation);
