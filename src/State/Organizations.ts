import { connect } from "@figliolia/react-galena";
import { OrganizationsModel } from "Models/OrganizationsModel";

export const Organizations = new OrganizationsModel();

export const connectOrganizations = connect(Organizations);
