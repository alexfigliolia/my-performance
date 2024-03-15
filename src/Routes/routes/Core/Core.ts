import { Authenticator } from "Authentication";
import { CreateLazyComponent } from "Components/Tools";
import { LazyRoute } from "Routes/mixins";
import { Organizations } from "State/Organizations";
import { Account } from "./Account";
import { CoreCatch } from "./CoreCatch";
import { Profile } from "./Profile";
import { Team } from "./Team";
import { TeammateProfile } from "./TeammateProfile";
import { Teams } from "./Teams";

export const Core = new LazyRoute({
  path: "/",
  Component: CreateLazyComponent({
    loader: () => import("Layouts/Core"),
  }),
  loader: async () => {
    await Authenticator.verifySession();
    await Organizations.initialize();
    return null;
  },
  children: [Teams, Team, Profile, TeammateProfile, Account, CoreCatch],
});
