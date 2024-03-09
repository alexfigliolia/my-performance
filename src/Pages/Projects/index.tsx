import React, { Fragment, memo } from "react";
import { Greeting } from "Components/Greeting";
import { PageContent } from "Components/Layouts";
import type { PropLess } from "Types/React";
import { RepositoryList } from "./RepositoryList";
import { TrackedProjects } from "./TrackedProjects";

export default memo(
  function Projects(_: PropLess) {
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
