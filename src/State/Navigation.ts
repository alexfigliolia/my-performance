import { connect } from "@figliolia/react-galena";
import { NavigationModel } from "Models/Navigation";

export const Navigation = new NavigationModel();

export const connectNavigation = connect(Navigation);
