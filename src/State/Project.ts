import { connect } from "@figliolia/react-galena";
import { ProjectModel } from "Models/Project";

export const Project = new ProjectModel();

export const connectProject = connect(Project);
