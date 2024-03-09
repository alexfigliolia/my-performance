import React, { Component, Fragment } from "react";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "Components/Toaster";
import { Router } from "Routes";
import { Screen } from "State/Screen";
import { TaskQueue } from "Tools/TaskQueue";
import type { PropLess } from "Types/React";

export class App extends Component<PropLess> {
  constructor(props: PropLess) {
    super(props);
    Screen.initialize();
  }

  public override componentWillUnmount() {
    Screen.destroy();
    TaskQueue.clearPendingTasks();
  }

  override render() {
    return (
      <Fragment>
        <RouterProvider router={Router} />
        <Toaster />
      </Fragment>
    );
  }
}
