import { createBrowserRouter } from "react-router-dom";
import { Navigation } from "State/Navigation";
import { Core } from "./routes/Core";
import { Auth } from "./routes/Auth";

export const Router = createBrowserRouter([Core, Auth]);
Navigation.register(Router);
