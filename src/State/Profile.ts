import { createUseState } from "@figliolia/react-galena";
import { ProfileModel } from "Models/Profile";

export const Profile = new ProfileModel();

export const useProfile = createUseState(Profile);
