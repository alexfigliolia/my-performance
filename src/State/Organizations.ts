import { connect, createUseState } from "@figliolia/react-galena";
import { OrganizationsModel } from "Models/Organizations";

export const Organizations = new OrganizationsModel();

export const connectOrganizations = connect(Organizations);
export const useOrganizations = createUseState(Organizations);
