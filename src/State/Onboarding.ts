import { connect } from "@figliolia/react-galena";
import { OnboardingModel } from "Models/Onboarding";

export const Onboarding = new OnboardingModel();

export const connectOnboarding = connect(Onboarding);
