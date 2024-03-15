import { redirect } from "react-router-dom";
import { CreateLazyComponent } from "Components/Tools";
import { LazyRoute } from "Routes/mixins";
import { Organizations } from "State/Organizations";
import { Profile as ProfileState } from "State/Profile";

export const TeammateProfile = new LazyRoute({
  path: "/teammate/:id",
  loader: ({ params }) => {
    const ID = parseInt(params.id || "");
    if (isNaN(ID)) {
      throw redirect("/profile");
    }
    ProfileState.resetRoute();
    void Organizations.registerIfUninitialized(async ({ current }) => {
      await ProfileState.getProfiles({
        userId: ID,
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
