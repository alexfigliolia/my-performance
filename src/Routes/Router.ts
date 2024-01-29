import { createBrowserRouter } from "react-router-dom";
import { Navigation } from "State/Navigation";
import { Core } from "./routes/Core";
import { Login } from "./routes/Login";
import { SignUp } from "./routes/SignUp";

export const Router = createBrowserRouter([Core, Login, SignUp]);

Navigation.register(Router.navigate.bind(Router));
Router.subscribe(state => {
  const { pathname, search } = state.location;
  Navigation.setRoute({ search, pathname });
});
