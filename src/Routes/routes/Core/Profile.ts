import { CreateLazyComponent } from "Components/Tools";
import { LazyRoute } from "Routes/mixins";
import { Organizations } from "State/Organizations";
import { Profile as ProfileState } from "State/Profile";

export const Profile = new LazyRoute({
  path: "/profile",
  loader: () => {
    ProfileState.resetRoute();
    void Organizations.registerIfUninitialized(async ({ current, user }) => {
      await ProfileState.getProfiles({
        userId: user.id,
        organizationId: current,
      });
      ProfileState.loading(false);
    });
    return null;
  },
  Component: CreateLazyComponent({
    loader: () => import("Pages/Profile"),
  }),
});
