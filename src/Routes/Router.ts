import { createBrowserRouter } from "react-router-dom";
import { Navigation } from "State/Navigation";
import { Auth, Core } from "./routes";

export const Router = createBrowserRouter([Core, Auth]);
Navigation.register(Router);
