import { connect, createUseState } from "@figliolia/react-galena";
import { ProjectsModel } from "Models/Projects";

export const Projects = new ProjectsModel();

export const connectProjects = connect(Projects);
export const useProjects = createUseState(Projects);
