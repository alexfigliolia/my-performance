import { createBrowserRouter } from "react-router-dom";
import { Navigation } from "State/Navigation";
import { Core } from "./routes/Core";
import { Auth } from "./routes/Auth";

export const Router = createBrowserRouter([Core, Auth]);

Navigation.register(Router.navigate.bind(Router));
Router.subscribe(state => {
  const { pathname, search } = state.location;
  Navigation.setRoute({ search, pathname });
});
