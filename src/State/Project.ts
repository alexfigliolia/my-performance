import { connect } from "@figliolia/react-galena";
import { ProjectModel } from "Models/ProjectModel";

export const Project = new ProjectModel();

export const connectProject = connect(Project);
