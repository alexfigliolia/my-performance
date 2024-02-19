import React, { Fragment, memo } from "react";
import { useLoaderData } from "react-router-dom";
import { Greeting } from "Components/Greeting";
import { PageContent } from "Components/Layouts";
import { useUnmount } from "Hooks/useUnmount";
import { Organizations } from "State/Organizations";
import type { PropLess } from "Types/React";
import { RepositoryList } from "./RepositoryList";
import { TrackedProjects } from "./TrackedProjects";

export default memo(
  function Projects(_: PropLess) {
    const loaderID = useLoaderData() as string;

    useUnmount(() => {
      Organizations.Registry.unregister(loaderID);
    });

    return (
      <Fragment>
        <Greeting type="projects" />
        <TrackedProjects />
        <PageContent className="project-content">
          <RepositoryList />
        </PageContent>
      </Fragment>
    );
  },
  () => true,
);
