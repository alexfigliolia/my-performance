import { createBrowserRouter } from "react-router-dom";
import { Navigation } from "State/Navigation";
import { Login } from "./routes/Login";
import { SignUp } from "./routes/SignUp";
import { Home } from "./routes/Home";

export const Router = createBrowserRouter([Home, Login, SignUp]);

Navigation.register(Router.navigate.bind(Router));
Router.subscribe(state => {
  const { pathname, search } = state.location;
  Navigation.setRoute({ search, pathname });
});
