import { createBrowserRouter } from "react-router-dom";
import { Navigation } from "State/Navigation";
import { Auth } from "./routes/Auth";
import { Core } from "./routes/Core";

export const Router = createBrowserRouter([Core, Auth]);
Navigation.register(Router);
