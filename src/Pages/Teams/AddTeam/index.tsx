import type { ChangeEvent, FormEvent } from "react";
import React, { Fragment, memo, useCallback } from "react";
import { createUseState } from "@figliolia/react-galena";
import { BrandButton } from "Components/Gradients";
import { Input } from "Components/Inputs";
import { TriangleLoader } from "Components/Loaders";
import { PanelForm } from "Components/Modals";
import { useModals } from "State/Modals";
import type { PropLess } from "Types/React";
import { AddTeamModel } from "./Model";

const State = new AddTeamModel();
const useModel = createUseState(State);

export const AddTeam = memo(
  function AddTeam(_: PropLess) {
    const name = useModel(state => state.name);
    const loading = useModel(state => state.loading);
    const visible = useModals(state => state.newTeamOpen);

    const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      void State.createTeam();
    }, []);

    const setName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      State.set("name", e.target.value);
    }, []);

    return (
      <PanelForm
        title="New Team"
        visible={visible}
        onSubmit={onSubmit}
        close={State.closePanel}
        detail="Once your new team is created, you'll be able to add teammates and begin tracking their performance">
        <Fragment>
          <Input
            type="text"
            value={name}
            name="teamName"
            label="Team Name"
            autoComplete="off"
            onChange={setName}
          />
          <BrandButton text="Create" loading={loading}>
            <TriangleLoader ID="addTeamLoader" />
          </BrandButton>
        </Fragment>
      </PanelForm>
    );
  },
  () => true,
);
