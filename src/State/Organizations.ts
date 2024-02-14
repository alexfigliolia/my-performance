import { connect } from "@figliolia/react-galena";
import { OrganizationsModel } from "Models/Organizations";

export const Organizations = new OrganizationsModel();

export const connectOrganizations = connect(Organizations);
