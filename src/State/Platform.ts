import { connect } from "@figliolia/react-galena";
import { PlatformModel } from "Models/Platform";

export const Platform = new PlatformModel();

export const connectPlatforms = connect(Platform);
